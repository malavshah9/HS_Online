import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { UserDbService } from '../services/user-db.service';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from "@angular/forms";
import { Password } from '../shared/Password_class';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.page.html',
  styleUrls: ['./changepass.page.scss'],
})
export class ChangepassPage implements OnInit {
  userName:String;
  changeForm: FormGroup;
  constructor(public route: Router,private useDb:UserDbService,public toast: ToastController,public formBuilder: FormBuilder) { 
    this.changeForm = this.formBuilder.group({
      'oldPassword': new FormControl('', Validators.compose([
        Validators.required
      ])),
      'newPassword': new FormControl('', Validators.compose([
        Validators.required
      ])),
      'confirmNewPassword':new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }
  ionViewDidEnter(){
    this.userName=localStorage.getItem('UserName');
  }
  ngOnInit() {}
  async onClick(){
    let newPassword=this.changeForm.get('newPassword').value;
    let confirmNewPassword=this.changeForm.get('confirmNewPassword').value;
    let t1:HTMLIonToastElement;
    if(newPassword===confirmNewPassword){
      let pasword=new Password(this.changeForm.get('oldPassword').value,newPassword);
      let userId=localStorage.getItem('UserId');
      this.useDb.changePassword(pasword,userId).subscribe(async (data:any)=>{
        console.log(data);
        if(data.result) {
          this.route.navigateByUrl('/dashboard');
          let t2 = await this.toast.create({
            message: "Password Changed Successfully!",
            duration: 1000,
            showCloseButton: true,
            closeButtonText: 'Okay',
            color: 'success'
          });
          t2.present();
        }
        else {
         let t3 = await this.toast.create({
            message: "Old Passwords do not match!",
            duration: 1000,
            showCloseButton: true,
            closeButtonText: 'Okay',
            color: 'success'
          });
          t3.present();
        }
      },err=>{
        console.log(err);
      });
    }
    else{
      t1=await this.toast.create({
        message: "New Passwords do not match!",
        duration: 1000,
        showCloseButton: true,
        closeButtonText: 'Okay',
        color: 'success'
      });
      t1.present();
      }
    }
  onExit(){
    this.route.navigateByUrl('/dashboard');
  }
}
