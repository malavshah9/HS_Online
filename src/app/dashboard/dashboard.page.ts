import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  userName:String;
  constructor(public route: Router,private screenOrientation: ScreenOrientation) { 
    this.userName=localStorage.getItem('UserName');
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
  this.route.navigateByUrl('');
}


}
