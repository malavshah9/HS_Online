import { HistoryCustom } from './../shared/history_class';
import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserDbService } from '../services/user-db.service';
@Component({
  selector: 'app-purchased',
  templateUrl: './purchased.page.html',
  styleUrls: ['./purchased.page.scss'],
})
export class PurchasedPage implements OnInit {
  private histories:HistoryCustom[];
  constructor(public route: Router,private screenOrientation: ScreenOrientation,private statusBar:StatusBar,private userDb:UserDbService) { }

  ngOnInit() {
    this.userDb.getHistory().subscribe((data:HistoryCustom[])=>{
      this.histories=data;
    });
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }
  ionViewWillEnter(){
    this.statusBar.hide();
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }
  ionViewWillLeave(){
    // this.statusBar.styleDefault();
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }
  onExit(){
    this.route.navigateByUrl('/dashboard');
  }
}
