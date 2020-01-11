import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.page.html',
  styleUrls: ['./changepass.page.scss'],
})
export class ChangepassPage implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  onClick(){
    this.route.navigateByUrl('/dashboard');
    }
}
