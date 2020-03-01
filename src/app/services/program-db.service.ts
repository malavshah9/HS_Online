import { DrawType } from './../shared/draw_type_class';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProgramDbService {

  private programUlr: string = "http://honestonline.in/api/index.php/program";
  private doubleJackpotUrl: string = 'http://honestonline.in/api/index.php/doublejackpot';

  constructor(private http: HttpClient) { }

  submitDraw(drawType: DrawType) {
    const body = JSON.stringify(drawType);
    return this.http.post(this.programUlr, body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  submitDoubleJackpot(obj:any){
    const body = JSON.stringify(obj);
    console.log(body);
    return this.http.post(this.doubleJackpotUrl, body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

}
