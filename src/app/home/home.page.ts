import { isNull } from 'util';
import { Component, ViewChild } from '@angular/core';

import { Router } from '../../../node_modules/@angular/router';
import { UserDbService } from '../services/user-db.service';
import { ToastController, LoadingController } from '@ionic/angular';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { User } from '../shared/User_class';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  loginForm: FormGroup;
  user: User;
  constructor(
    public route: Router,
    private useDb: UserDbService,
    public toast: ToastController,
    public formBuilder: FormBuilder,
    private loadingController: LoadingController
  ) {
    console.log('login page loaded');
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required]))
    });
    if (!isNull(localStorage.getItem('UserId'))) {
      this.route.navigateByUrl('/dashboard');
    }
  }
  async onClick() {
    // this.route.navigateByUrl('/dashboard');
    const loading = await this.loadingController.create({
      message: 'Logging in...',
      duration: 5000
    });
    await loading.present();
    this.user = new User(
      this.loginForm.get('username').value,
      this.loginForm.get('password').value
    );
    this.useDb.loginUser(this.user).subscribe(
      async (data: any) => {
        let t1: HTMLIonToastElement;
        console.log(data);
        if (data.result) {
          t1 = await this.toast.create({
            message: 'Successfull Login!',
            duration: 1000,
            showCloseButton: true,
            closeButtonText: 'Okay',
            cssClass: 'myClass'
          });
          localStorage.setItem('UserId', data.UserId);
          localStorage.setItem('UserName', data.UserName);
          this.route.navigateByUrl('/dashboard');
        } else {
          t1 = await this.toast.create({
            message: 'Invalid User Name or Password!',
            duration: 1000,
            showCloseButton: true,
            closeButtonText: 'Okay',
            cssClass: 'myClass'
          });
        }
        this.loginForm.reset();
        t1.present();
      },
      err => {
        alert(err.message);
        console.log(err);
      },
      () => {
        loading.dismiss();
      }
    );
  }
}
