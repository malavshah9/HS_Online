import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserDbService } from '../services/user-db.service';
import { PurchasedHistory } from '../shared/purchased_class';
import { MyPipePipe } from '../shared/my-pipe.pipe';
import {Location} from '@angular/common';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  myIndex: String[] = [];
  YantraArray=[];
  constructor(public route: Router,private screenOrientation: ScreenOrientation,private statusBar:StatusBar,private userDb:UserDbService,private MyPipe:MyPipePipe,private _location: Location) {
    this.loadData();
    this.YantraArray["1"]="Shree";
    this.YantraArray["2"]="Vashikaran";
    this.YantraArray["3"]="Sudarshan";
    this.YantraArray["4"]="Vastu";
    this.YantraArray["5"]="Planet"
    this.YantraArray["6"]="Love";
    this.YantraArray["7"]="Tara";
    this.YantraArray["8"]="Grah";
    this.YantraArray["9"]="Matsya";
    this.YantraArray["10"]="Meditation";
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
    // this.route.navigateByUrl('/dashboard');
    this._location.back();
  }
  ionViewWillEnter(){
    this.statusBar.hide();
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.loadData();
  }
  myEvaluater(content){
    let num=parseInt(content);
    if(!isNaN(num) && num>0){
      return true;
    }
    else{
      return false;
    }
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
