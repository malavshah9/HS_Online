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
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.hide();
      this.splashScreen.hide();
      document.addEventListener("offline", () => {
        alert("Internet is off.Please connect to Internet.");
      }, false);
    });
    if(localStorage.getItem('UserId')!=null){
      this.route.navigate(['dashboard']);
    }
    else{
      this.route.navigate(['home']);
    }
  }
}