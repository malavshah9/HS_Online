import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-program',
  templateUrl: './program.page.html',
  styleUrls: ['./program.page.scss'],
})
export class ProgramPage implements OnInit {

  constructor(public route: Router,private statusBar: StatusBar,private screenOrientation: ScreenOrientation) { }

  ngOnInit() {
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }
  ionViewWillEnter(){
    this.statusBar.hide();
    // this.statusBar.overlaysWebView(true);
    // this.statusBar.backgroundColorByHexString("#008000");
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }
  ionViewWillLeave(){
    // this.statusBar.show();
    this.statusBar.styleDefault();
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }
  onLogout(){
    this.route.navigateByUrl('/dashboard');
  }

}
