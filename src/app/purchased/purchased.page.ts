import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-purchased',
  templateUrl: './purchased.page.html',
  styleUrls: ['./purchased.page.scss'],
})
export class PurchasedPage implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }
  onExit(){
    this.route.navigateByUrl('/dashboard');
  }
}
