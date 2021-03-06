import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from 'src/app/shared/User_class';
import { Password } from '../shared/Password_class';


@Injectable({
  providedIn: 'root'
})
export class UserDbService {
  private urllogin: string = "https://api.honestonline.in/index.php/login";
  private urlHistory: string = "https://api.honestonline.in/index.php/history";
  private urlBalance: string = "https://api.honestonline.in/index.php/balance/";
  private urlChangePass: string = "https://api.honestonline.in/index.php/user/";
  private urlPurchasedHistory:string="https://api.honestonline.in/index.php/user/";
  private urlCheckBalance:string="https://api.honestonline.in/index.php/winbalance/";
  private urlTakeBalance:string="https://api.honestonline.in/index.php/takebalance/";
  private urlVersion:string="https://api.honestonline.in/index.php/version";
  constructor(private httpClient: HttpClient) { }
  getVersion(){
    return this.httpClient.get(this.urlVersion,{
      headers:new HttpHeaders({
        'Cache-control': 'no-cache',
        'Expires':'0',
        'Pragma':'no-cache'
      })});
  }
  loginUser(user: User) {
    const body = JSON.stringify(user);
    return this.httpClient.post(this.urllogin, body, {
      headers: new HttpHeaders().set("Content-type", "application/json")
    });
  }
  getHistory() {
      return this.httpClient.get(this.urlHistory,{
        headers:new HttpHeaders({
          'Cache-control': 'no-cache',
          'Expires':'0',
          'Pragma':'no-cache'
        })});
  }
  takeBalance(uid) {
    return this.httpClient.get(this.urlTakeBalance+uid,{
      headers:new HttpHeaders({
        'Cache-control': 'no-cache',
        'Expires':'0',
        'Pragma':'no-cache'
      })
    });
  }
  checkBalance(uid) {
    return this.httpClient.get(this.urlCheckBalance+uid,{
      headers:new HttpHeaders({
        'Cache-control': 'no-cache',
        'Expires':'0',
        'Pragma':'no-cache'
      })
    });
  }
  changePassword(pass: Password, userId) {
    const body = JSON.stringify(pass);
    return this.httpClient.put(this.urlChangePass + userId, body, {
      headers: new HttpHeaders().set("Content-type", "application/json")
    });
  }
  getBalance(uid) {
    return this.httpClient.get(this.urlBalance+uid,{
      headers:new HttpHeaders({
        'Cache-control': 'no-cache',
        'Expires':'0',
        'Pragma':'no-cache'
      })
    });
  }
  getPurchasedHistory(uid){
    return this.httpClient.get(this.urlPurchasedHistory + uid,{
      headers:new HttpHeaders({
        'Cache-control': 'no-cache',
        'Expires':'0',
        'Pragma':'no-cache'
      })
    });
  }

}
