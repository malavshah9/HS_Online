import { isNull } from 'util';
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if(isNull(localStorage.getItem("UserId"))){
      this.router.navigate(["home"]);
      return false;
    }
    return true;
  }
}
