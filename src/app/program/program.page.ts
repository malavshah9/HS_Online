import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-program',
  templateUrl: './program.page.html',
  styleUrls: ['./program.page.scss'],
})
export class ProgramPage implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  onLogout(){
    this.route.navigateByUrl('/dashboard');
  }

}
