import { Component, ViewChild } from '@angular/core';

import { Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public route: Router) { }
  onClick() {
    this.route.navigateByUrl('/dashboard');
  }
 
}
