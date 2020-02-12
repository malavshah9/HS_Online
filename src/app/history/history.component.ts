import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserDbService } from '../services/user-db.service';
import { PurchasedHistory } from '../shared/purchased_class';
import { MyPipePipe } from '../shared/my-pipe.pipe';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  myIndex: String[] = [];
  constructor(public route: Router,private screenOrientation: ScreenOrientation,private statusBar:StatusBar,private userDb:UserDbService,private MyPipe:MyPipePipe) {
    this.loadData(); 
    this.histories=[];
    for (let i = 11; i <= 100; i++){
      if (i % 10 === 0) {
        this.myIndex.push((i - 10) + "")
      }
      else {
        this.myIndex.push(i + "")
      }
    }
    for (let i = 1; i <= 9; i++){
      this.myIndex.push("0" + i);
    }
    this.myIndex.push("00");
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
    },500);
  }
}
