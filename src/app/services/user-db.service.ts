import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from 'src/app/shared/User_class';
import { Password } from '../shared/Password_class';


@Injectable({
  providedIn: 'root'
})
export class UserDbService {
  private urllogin: string = "https://honestonline.in/api/index.php/login";
  // private urllogin: string = "http://localhost/HS_Online_Backend/index.php/login";
  private urlHistory: string = "https://honestonline.in/api/index.php/history";
  private urlBalance: string = "https://honestonline.in/api/index.php/balance/";
  private urlChangePass: string = "https://honestonline.in/api/index.php/user/";
  private urlPurchasedHistory:string="https://honestonline.in/api/index.php/user/";
  constructor(private httpClient: HttpClient) { }

  loginUser(user: User) {
    const body = JSON.stringify(user);
    return this.httpClient.post(this.urllogin, body, {
      headers: new HttpHeaders().set("Content-type", "application/json")
    });
  }
  getHistory() {
    console.log("getHistory() called ");
    return this.httpClient.get(this.urlHistory, {
      headers: new HttpHeaders().set("Content-type", "application/json")
    });
  }
  changePassword(pass: Password, userId) {
    const body = JSON.stringify(pass);
    return this.httpClient.put(this.urlChangePass + userId, body, {
      headers: new HttpHeaders().set("Content-type", "application/json")
    });
  }
  getBalance(uid) {
    return this.httpClient.get(this.urlBalance + uid);
  }
  getPurchasedHistory(uid){
    return this.httpClient.get(this.urlPurchasedHistory + uid);
  }

}
