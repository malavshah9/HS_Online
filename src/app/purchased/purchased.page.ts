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
  }
  loadData(){
    this.userDb.getHistory().subscribe((data:HistoryCustom[])=>{
      this.histories=data;
    });
  }
  ionViewWillEnter(){
    this.statusBar.hide();
    this.loadData();
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }
  doRefresh(event:any){
    setTimeout(()=>{
      this.ngOnInit();
      event.target.complete();
    },1000);
  }
  onExit(){
    this.route.navigateByUrl('/dashboard');
  }
}
