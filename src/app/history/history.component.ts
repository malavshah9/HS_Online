import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserDbService } from '../services/user-db.service';
import { PurchasedHistory } from '../shared/purchased_class';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {

  constructor(public route: Router,private screenOrientation: ScreenOrientation,private statusBar:StatusBar,private userDb:UserDbService) {
    this.loadData(); 
    this.histories=[];
  }
  histories:PurchasedHistory[]=[];
  ngOnInit() {}
  onExit(){
    this.route.navigateByUrl('/dashboard');
  }
  ionViewWillEnter(){
    this.statusBar.hide();
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.loadData();
  }
  loadData(){
    console.log(" loadData() called ");
    this.userDb.getPurchasedHistory(localStorage.getItem("UserId")).subscribe((data:PurchasedHistory[])=>{
      this.histories=data;
    },(e)=>{},()=>{
    });
  }
  doRefresh(event:any){
    setTimeout(()=>{
      this.loadData();
      event.target.complete();
    },1000);
  }
}
