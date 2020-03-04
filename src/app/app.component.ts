import { Component, ViewChildren, QueryList } from '@angular/core';
import { Platform, ModalController, IonRouterOutlet, NavController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { SplashPage } from './splash/splash.page';
import { Router } from '@angular/router';
import { UserDbService } from './services/user-db.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  appVersion="";
  
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private alertController: AlertController,
    private userDb:UserDbService,
    // public modalCtrl: ModalController,
     public route:Router ) {
    this.initializeApp();
    
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.hide();
    });
    
    this.userDb.getVersion().subscribe(async (data)=>{
      this.appVersion=data[0].AppVersionId;
    },(err)=>{
      console.log(err);
    },async ()=>{
      if(this.appVersion!=="1"){
        const battingAlert = await this.alertController.create({
          buttons: [{text:'OK',cssClass:'my-alert-button',handler:()=>{
            navigator['app'].exitApp();
          }}],
          mode:'ios',
          message:"Your app is outdated.Please ask for new app."
        });
        battingAlert.present().then(()=>{
          navigator['app'].exitApp();
        })
      }
    });
    if(localStorage.getItem('UserId')!=null){
      this.route.navigate(['dashboard']);
    }
    else{
      this.route.navigate(['home']);
    }
  }
}