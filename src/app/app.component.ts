import { Component, ViewChildren, QueryList } from '@angular/core';
import { Platform, ModalController, IonRouterOutlet, NavController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { SplashPage } from './splash/splash.page';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private alertController: AlertController,
    // public modalCtrl: ModalController,
     public route:Router
  ) {
    this.splashScreen.show();
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();
      this.statusBar.hide();
      setTimeout(() => {
        console.log('inside splash');
        this.splashScreen.hide();
      }, 5000);
    });
    if(localStorage.getItem('UserId')!=null){
      //console.log(localStorage.getItem('UserId'));
      
      this.route.navigate(['dashboard']);
    }
    else{
      this.route.navigate(['home']);
    }
  }

  // backButtonEnable() {
  //   this.platform.backButton.subscribe(
  //     async () => {
  //       this.routerOutlets.forEach(
  //         async (outlet: IonRouterOutlet) => {
  //           if (this.route.url === '/home' || this.route.url === 'dashboard') {
  //             this.presentAlertConfirm();
  //           }
  //           else if (this.route.url === '/changepass' || this.route.url === '/history' || this.route.url === '/purchased' || this.route.url === '/program') {
  //             this.navCtrl.navigateRoot(['/dashboard']);
  //           }
  //         }
  //       );
  //     }
  //   );
  //}


  // async presentAlertConfirm() {
  //   const alert = await this.alertController.create({
  //     header: 'Confirm Exit!',
  //     message: 'Do you want to exit???',
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: () => {
  //           console.log('Confirm Cancel: blah');
  //         }
  //       }, {
  //         text: 'Yes',
  //         handler: () => {
  //           console.log('Confirm Okay');
  //           navigator['app'].exitApp();
  //         }
  //       }
  //     ]
  //   });

  //   await alert.present();
  // }

}