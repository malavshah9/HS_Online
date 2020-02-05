import { async } from '@angular/core/testing';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserDbService } from '../services/user-db.service';
import { ProgramDbService } from '../services/program-db.service';
import { DrawType } from '../shared/draw_type_class';
import { AlertController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-program',
  templateUrl: './program.page.html',
  styleUrls: ['./program.page.scss'],
})
export class ProgramPage implements OnInit {
  userName: String;
  userBalance: String = "0";
  // draw_hour:number=0;
  // draw_minute:number=0;
  // am_or_pm:string="";
  // current_date:string="";
  // current_hour:number=0;
  // current_minute:number=0;
  // current_second:number=0;
  // remaining_minute:number=0;
  // remaining_second:number=0;
  // dateInterval:number=0;

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

  constructor(
    public route: Router,
    private statusBar: StatusBar,
    private screenOrientation: ScreenOrientation,
    private userDb: UserDbService,
    private programDb: ProgramDbService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {
    this.userName = localStorage.getItem('UserName');
    this.userDb.getBalance(localStorage.getItem('UserId')).subscribe((data: any) => {
      if (data.result) {
        this.userBalance = data.UserBalance;
      }
    });
  }

  ngOnInit() {
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    // this.setDrawTimer();
    // this.setCurrentDate();
    // this.setCurrentTime();
    // setInterval(()=>{
    //   this.setCurrentTime();
    // },1000);
    // setInterval(()=>{
    //   this.setDrawTimer();
    // },this.remaining_minute*1000);
    // setInterval(()=>{
    //   this.setCurrentDate();
    // },this.dateInterval)
  }
  // setDrawTimer(){
  //   let today=new Date();
  //   let minute=today.getMinutes();
  //   if(minute>=45 && minute<=59){
  //     this.draw_hour=this.addHours(today,1);
  //   }
  //   else{
  //     this.draw_hour=today.getHours();
  //   }
  //   this.am_or_pm=this.draw_hour>=12?"PM":"AM";
  //   let number_hour=+this.draw_hour;
  //   number_hour=number_hour%12;
  //   number_hour=number_hour?number_hour:12;
  //   // this.draw_hour=number_hour<=9?'0'+number_hour.toString():number_hour.toString();
  //   console.log(" this.draw_hour ",this.draw_hour);
  //   let currentMinutes=today.getMinutes();
  //   if(currentMinutes>=0 && currentMinutes<=14){
  //     this.draw_minute=15;
  //   }
  //   else if(currentMinutes>=15 && currentMinutes<=29){
  //     this.draw_minute=30;
  //   }
  //   else if(currentMinutes>=30 && currentMinutes<=44){
  //     this.draw_minute=45;
  //   }
  //   else{
  //     this.draw_minute=0;
  //   }
  // }
  // setCurrentTime(){
  //   let date = new Date();
  //   let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  //   let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  //   let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  //   hours=hours%12;
  //   hours=hours?hours:12;
  //   // this.current_hour=hours<=9?'0'+hours.toString():hours.toString();
  //   // this.current_minute=minutes.toString();
  //   // this.current_second=seconds.toString();
  //   let number_draw_minute=+this.draw_minute;
  //   let remain_minute=number_draw_minute-minutes;
  //   this.remaining_minute=remain_minute;
  //   // this.remaining_second="";
  // }
  // setCurrentDate(){
  //   let today = new Date(); 
  //   let dd = today.getDate(); 
  //   let mm = today.getMonth() + 1; 
  //   let yyyy = today.getFullYear(); 
  //       if (dd < 10) { 
  //           dd = '0' + dd; 
  //       } 
  //       if (mm < 10) { 
  //           mm = '0' + mm; 
  //       }
  //   this.current_date='  '+dd + '-' + mm + '-' + yyyy;
  //   let nextDay:Date=new Date(today.getDate()+1);
  //   nextDay.setHours(0,0,0,0);
  //   // this.dateInterval=(new Date(nextDay-new Date()).getHours()*60)+(new Date(nextDay-new Date()).getMinutes());
  //   console.log("dateInterval ",this.dateInterval);

  // }
  // addHours(date:Date,hour){
  //   let anotherDay=date.setTime(date.getTime()+(hour*60*60*100));
  //   let dateAnother:Date=new Date(anotherDay);
  //   console.log(" anotherDay ",anotherDay);
  //   return dateAnother.getHours().toString();
  // }
  ionViewWillEnter() {
    this.statusBar.hide();
    // this.statusBar.overlaysWebView(true);
    // this.statusBar.backgroundColorByHexString("#008000");
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }
  ionViewWillLeave() {
    // this.statusBar.show();
    // this.statusBar.styleDefault();
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }
  onLogout() {
    this.route.navigateByUrl('/dashboard');
  }

  onDoubleJackpot() {
    this.route.navigateByUrl('/double-jackpot');
  }

  onSubmit() {
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
        'Normal'
      )).subscribe(
        async (data: any) => {
          console.log(data);
          if (data.result) {
            const toast = await this.toastController.create({
              message: 'Batting successfully!!',
              duration: 2000
            });
            toast.present();
          }
        },
        (err) => {
          console.log(err);
        },
        () => {

        }
      );
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
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Okay',
          handler: async (data) => {
            const ticket = data.ticket;
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

            await this.programDb.submitDraw(
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
                'Jackpot'
              )).subscribe(
                async (val: any) => {
                  console.log(val);
                  if (val.result) {
                    const toast = await this.toastController.create({
                      message: 'Batting successfully!!',
                      duration: 2000
                    });
                    toast.present();
                  }

                },
                (err) => {
                  console.log(err);
                },
                () => {

                }
              );
          }
        }
      ]
    });

    await alert.present();


  }
}
