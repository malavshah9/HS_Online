import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Platform, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  userName:String;
  subscribe:any;
  constructor(public route: Router,private screenOrientation: ScreenOrientation,private platform:Platform,private alertController:AlertController) { 
    this.userName=localStorage.getItem('UserName');
    this.subscribe=this.platform.backButton.subscribeWithPriority(666666,async ()=>{
      if(this.constructor.name=="DashboardPage"){
        const battingAlert = await this.alertController.create({
          buttons: [{text:'OK',cssClass:'my-alert-button',handler:()=>{
            navigator['app'].exitApp();
          }},{text:'Cancel',role:'cancel'}],
          mode:'ios',
          message:"Do you want to exit the app?"
        });
        battingAlert.present();
      }
    })
  }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.userName=localStorage.getItem('UserName');
  }
  onPurchased()
{
  this.route.navigateByUrl('/purchased');

}
onpro()
{
  this.route.navigateByUrl('/program');
}
onChange()
{
  this.route.navigateByUrl('/changepass');
}
onHistory()
{
  // this.route.navigateByUrl('/purchased');
  this.route.navigateByUrl('/history');
}
onLogout()
{
  localStorage.clear();
  //navigator['app'].exitApp();
  this.route.navigateByUrl('/home');
}


}
