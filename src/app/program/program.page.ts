import { Balance } from './../shared/Balance_class';
import { async } from '@angular/core/testing';
import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserDbService } from '../services/user-db.service';
import { ProgramDbService } from '../services/program-db.service';
import { DrawType } from '../shared/draw_type_class';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { isNull, isUndefined } from 'util';
import { MyPipePipe } from '../shared/my-pipe.pipe';
import {Location} from '@angular/common';
@Component({
  selector: 'app-program',
  templateUrl: './program.page.html',
  styleUrls: ['./program.page.scss'],
})
export class ProgramPage implements OnInit {
  userName:string;
  userBalance:string;
  draw_hour:string="0";
  draw_minute:string="0";
  am_or_pm:string="";
  current_date:string="0";
  current_hour:string="0";
  current_minute:string="0";
  current_second:string="0";
  current_time;
  draw_time;
  remaining_minute:string="";
  remaining_second:string="";
  batting_type:string="Normal";

  txt1: number;
  txt2: number;
  txt3: number;
  txt4: number;
  txt5: number;
  txt6: number;
  txt7: number;
  txt8: number;
  txt9: number;
  txt0: number;
  userId:any;
  mypromise:any;
  myObj:Balance;
  histories:History[];
  winBalance:number=0;
  constructor(
    public route: Router,
    private statusBar: StatusBar,
    private screenOrientation: ScreenOrientation,
    private userDb: UserDbService,
    private programDb: ProgramDbService,
    private alertController: AlertController,
    private toastController: ToastController,
    private zone:NgZone,
    public MyPipe:MyPipePipe,
    private _location: Location,
    private loadingController:LoadingController
  ) {
    this.txt0=this.txt1=this.txt2=this.txt3=this.txt4=this.txt5=this.txt6=this.txt7=this.txt8=this.txt9=null;
    this.userId=localStorage.getItem('UserId');
    this.myObj=new Balance(true,"","");
    this.getBalance();
    this.histories=[];
  }
  ngOnInit() {
    this.setTime();
    setInterval(()=>{
      this.setTime();
    },1000);
    setInterval(()=>{
      this.get5History();
    },30000); 
  }
  async get5History(){
    this.userDb.getHistory().subscribe((data:History[])=>{
      this.histories=data.slice(0,5);
    },(err)=>{

    });
  }
  async getBalance(){
    this.zone.run(()=>{
      this.userDb.getBalance(this.userId).subscribe((data: Balance) => {
        this.myObj=data;
      },(err)=>{
        
      });
    });
  }
  setTime(){
    this.setDrawTimer();
    this.setCurrentTime();
    this.setDifferenceTime();
    this.setCurrentDate();
  }
  setCurrentDate(){
    let date:any=new Date().getDate();
    date=date<=9?"0"+date.toString():date.toString();
    let month:any=new Date().getUTCMonth()+1;
    month=month<=9?"0"+month.toString():month.toString();
    let year:any=new Date().getFullYear();
    this.current_date=date+"-"+month+"-"+year;
  }
  setDifferenceTime(){
    let drawTime=new Date(this.draw_time);
    let current_time=new Date(this.current_time);
    
    if(drawTime.getHours()===0){
      console.log(" inside if ");
      drawTime.setDate(drawTime.getDate()+1);
    }
    let delta:any = Math.abs((+drawTime) - (+current_time) )/ 1000;
    let days = Math.floor(delta / 86400);
    delta -= days * 86400;
    let hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
    let minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;
    let seconds = delta % 60;
    this.remaining_minute=minutes<=9?"0"+minutes.toString().slice(0,2):minutes.toString().slice(0,2);
    this.remaining_second=seconds<=9?"0"+seconds.toString().slice(0,2):seconds.toString().slice(0,2);
  }
  setDrawTimer(){
    let today=new Date();
    // today.setHours(24);
    // today.setMinutes(0);
    let minute=today.getMinutes();
    if(minute>=45 && minute<=59){
      // this.draw_hour=new Date(new Date().setHours(new Date().getHours()+1)).getHours().toString();
      this.draw_hour=new Date(today.setHours(today.getHours()+1)).getHours().toString();
      // this.draw_hour=this.addHours(today,1);
    }
    else{
      this.draw_hour=today.getHours().toString();
    }
    let draw_hour_number=+this.draw_hour;
    this.am_or_pm=draw_hour_number>=12?"PM":"AM";
    let number_hour=+this.draw_hour;
    number_hour=number_hour%12;
    number_hour=number_hour?number_hour:12;
    this.draw_hour=number_hour<=9?"0"+number_hour+"":number_hour.toString();
    let currentMinutes=today.getMinutes();
    if(currentMinutes>=0 && currentMinutes<=14){
      this.draw_minute="15";
    }
    else if(currentMinutes>=15 && currentMinutes<=29){
      this.draw_minute="30";
    }
    else if(currentMinutes>=30 && currentMinutes<=44){
      this.draw_minute="45";
    }
    else{
      this.draw_minute="00";
    }
    let draw_minute_number=+this.draw_minute;
    this.draw_time=new Date().setHours(draw_hour_number,draw_minute_number,0);
  }
  setCurrentTime(){
    let date = new Date();
    // date.setHours(24);
    // date.setMinutes(0);
    let hours=date.getHours();
    hours=hours%12;
    hours=hours?hours:12;
    this.current_hour=hours<=9?'0'+hours.toString():hours.toString();
    this.current_minute=date.getMinutes()<10?"0"+date.getMinutes().toString():date.getMinutes().toString();
    this.current_second=date.getSeconds()<10?"0"+date.getSeconds().toString():date.getSeconds().toString();
    this.current_time=date.getTime();
  }
  addHours(date:Date,hour){
    let anotherDay=date.setTime(date.getTime()+(hour*60*60*100));
    let dateAnother:Date=new Date(anotherDay);
    return dateAnother.getHours().toString();
  }
  async takeBalance(){
    let showAlert=true;
    if(parseInt(this.winBalance+"")===0 || parseInt(this.winBalance+"")===NaN){
        showAlert=false;
    }
    const loading = await this.loadingController.create({
      message: 'Taking Balance...',
      duration:10000
    });
    await loading.present();
    this.userDb.takeBalance(localStorage.getItem("UserId")).subscribe(async (data:number)=>{
        this.winBalance=data;
        this.getBalance();
    },(err)=>{
      console.log(err);
    },async ()=>{
      const battingAlert = await this.alertController.create({
        buttons: [{text:'OK',cssClass:'my-alert-button'}],
        mode:'ios'
      });
      loading.dismiss();
      if(showAlert){
        battingAlert.message="Win Amount Taken Successfully!!!";
      }
      else{
        battingAlert.message="No Win Amount to Take";
      }
      battingAlert.present();
    });
  }
  async checkBalance(){
    const loading = await this.loadingController.create({
      message: 'Checking Balance...',
      duration:10000
    });
    await loading.present();
    this.userDb.checkBalance(localStorage.getItem("UserId")).subscribe(async (data:number)=>{
      this.winBalance=data;
    },(err)=>{
      console.log(err);
    },()=>{
      
      loading.dismiss();
      
    });
  }
  ionViewWillEnter(){
    this.statusBar.hide();
    this.userName = localStorage.getItem('UserName');
    this.getBalance();
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.batting_type="Normal";
    this.get5History();
  }
  onLogout() {
    // this.route.navigateByUrl('/dashboard');
    this._location.back();
  }
  onDoubleJackpot() {
    this.route.navigateByUrl('/double-jackpot');
  }
  isNullOrZero(){
    if(isNull(this.txt1) && isNull(this.txt2) && isNull(this.txt3) && isNull(this.txt4) && isNull(this.txt5) && isNull(this.txt6) && isNull(this.txt7) && isNull(this.txt8) && isNull(this.txt9) && isNull(this.txt0) ){
      return true;
    }
    else if(this.txt0===0 || this.txt1===0 || this.txt2===0  || this.txt3===0  || this.txt4===0 
         || this.txt8===0  || this.txt7===0  || this.txt6===0  || this.txt5===0  || this.txt9===0 ){
        return true;
      }
      return false;
  }
  async onSubmit() {
    const battingAlert = await this.alertController.create({
      buttons: [{text:'OK',cssClass:'my-alert-button'}],
      mode:'ios'
    });
    if(this.isNullOrZero()){
      battingAlert.message="Enter Proper Ticket Quantity!";
      battingAlert.present();
    }
    else{
      this.programDb.submitDraw(
        new DrawType(
          Number(this.txt1),
          Number(this.txt2),
          Number(this.txt3),
          Number(this.txt4),
          Number(this.txt5),
          Number(this.txt6),
          Number(this.txt7),
          Number(this.txt8),
          Number(this.txt9),
          Number(this.txt0),
          Number(localStorage.getItem('UserId')),
          this.batting_type
        )).subscribe(
         async (data: any) => {
            if(data.result){
              battingAlert.message="Batting Successfully!!!";
            }
            else if(data.reason==405){
              battingAlert.message="Low Balance!!!"
            }
            else{
              battingAlert.message="Batting Unsuccessfully!!!"
            }
            battingAlert.present();
          },
          (err) => {
            console.log(err);
          },
          () => {
            this.batting_type="Normal";
            this.getBalance();
          }
        );
    }
    this.onClear();
  }


  async onJackpot() {
    
    const alert = await this.alertController.create({
      header: 'Please enter ticket',
      inputs: [
        {
          name: 'ticket',
          type: 'number',
          placeholder: 'Please enter ticket'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'my-alert-button',
          handler: () => {
          }
        }, {
          text: 'Okay',
          handler: async (data) => {
            const ticket = parseInt(data.ticket);
            const battingAlert = await this.alertController.create({
              buttons: ['OK'],
              mode:"ios"
            });
            if(!isNull(ticket) && ticket!==0 && !isNaN(ticket)){
              this.txt1 = ticket;
              this.txt2 = ticket;
              this.txt3 = ticket;
              this.txt4 = ticket;
              this.txt5 = ticket;
              this.txt6 = ticket;
              this.txt7 = ticket;
              this.txt8 = ticket;
              this.txt9 = ticket;
              this.txt0 = ticket;
              this.batting_type="Jackpot";
            }
            else{
              battingAlert.message="Enter Proper Ticket Quantity!";
              battingAlert.present();
            }

            
  }
}],
mode:"ios"
    });
    alert.present();
  }
  onClear(){
    this.txt0=this.txt1=this.txt2=this.txt3=this.txt4=this.txt5=this.txt6=this.txt7=this.txt8=this.txt9=null;
  }
  viewAll(){
    this.route.navigateByUrl('/purchased');
  }
  lastBatting(){
    this.route.navigateByUrl('/history');
  }
}
