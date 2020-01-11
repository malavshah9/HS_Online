import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }
  onPurchased()
{
  this.route.navigateByUrl('/purchased');

}
onpro()
{
  this.route.navigateByUrl('/program');
}
onChange()
{
  this.route.navigateByUrl('/changepass');
}
onLogout()
{
  this.route.navigateByUrl('');
}


}
