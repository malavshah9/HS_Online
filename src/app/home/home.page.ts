import { Component, ViewChild } from '@angular/core';

import { Router } from '../../../node_modules/@angular/router';
import { UserDbService } from '../services/user-db.service';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { User } from '../shared/User_class';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loginForm: FormGroup;
  user:User;
  constructor(public route: Router,private useDb:UserDbService,public toast: ToastController,public formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      'username': new FormControl('', Validators.compose([
        Validators.required
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
   }
  onClick() {
    // this.route.navigateByUrl('/dashboard');
    this.user=new User(this.loginForm.get('username').value,this.loginForm.get('password').value);
    this.useDb.loginUser(this.user).subscribe(async (data:any)=>{
      let t1:HTMLIonToastElement;
      console.log(data);
      if(data.result) {
        this.route.navigateByUrl('/dashboard');
        t1 = await this.toast.create({
          message: "Successfull Login!",
          duration: 1000,
          showCloseButton: true,
          closeButtonText: 'Okay',
          color: 'success'
        });
        localStorage.setItem('UserId',data.UserId);
        localStorage.setItem('UserName',data.UserName);
      }
      else {
        t1 = await this.toast.create({
          message: "Invalid User Name or Password!",
          duration: 1000,
          showCloseButton: true,
          closeButtonText: 'Okay',
          color: 'success'
        });
      }
      t1.present();
    },err=>{
      console.log(err);
    });
  }
 
}
