import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from 'src/app/shared/User_class';

@Injectable({
  providedIn: 'root'
})
export class UserDbService {
  private urllogin: string = "https://honestonline.in/api/index.php/login";
  constructor(private httpClient:HttpClient) {}

  loginUser(user:User) {
    const body = JSON.stringify(user);
    return this.httpClient.post(this.urllogin, body, {
      headers: new HttpHeaders().set("Content-type", "application/json")
    });
  }

}
