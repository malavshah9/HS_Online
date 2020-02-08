import { ProgramDbService } from './../services/program-db.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-double-jackpot',
  templateUrl: './double-jackpot.page.html',
  styleUrls: ['./double-jackpot.page.scss'],
})

export class DoubleJackpotPage implements OnInit {
  myIndex: String[] = [];
  angForm: FormGroup;
  constructor(    private fb: FormBuilder,private screenOrientation: ScreenOrientation,private alertController: AlertController ,public route: Router,
    public programDb:ProgramDbService   ) {
    for (let i = 11; i <= 100; i++){
      if (i % 10 === 0) {
        this.myIndex.push((i - 10) + "")
      }
      else {
        this.myIndex.push(i + "")
      }
    }
    for (let i = 1; i <= 9; i++){
      this.myIndex.push("0" + i);
    }
    this.myIndex.push("00");
    this.angForm = new FormGroup({
      names: new FormArray([])
    });
    for(let i=0;i<100;i++){
      this.doubleJackpot();
    }
  }
  onExit(){
    this.route.navigateByUrl('/program');
  }
  get names(): FormArray {
    return this.angForm.get('names') as FormArray;
  }
  doubleJackpot() { 
    this.names.push(new FormControl('')); 
  }
  async onSubmit(){
    const battingAlert = await this.alertController.create({
      buttons: ['OK'],
      message:"Enter Proper Ticket Quantity!"
    });
    let myObj={};
    let hasValue=false;
    for (let i = 0; i <this.names.length; i++) {
      // console.log(this.names.at(i).value);
      if(this.names.at(i).value){
        let txt="txt"+this.myIndex[i];
        myObj[txt]=this.names.at(i).value;
        hasValue=true;
      }
    }
    if(hasValue){
      myObj["UserId"]=localStorage.getItem('UserId');
      console.log(myObj);
      this.programDb.submitDoubleJackpot(myObj).subscribe((data:any)=>{
        if(data.result){
          battingAlert.message="Batting Successfully!!!";
        }
        else if(data.reason==405){
          battingAlert.message="Low Balance!!!"
        }
        else{
          battingAlert.message="Batting Unsuccessfully!!!"
        }
        battingAlert.present();
      },
      (err) => {
        console.log(err);
      },
      () => {
  
      }
    );
    this.angForm.reset();
    }
    else{
      battingAlert.present();
    }
  }
  ionViewWillEnter(){
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }
  ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

}
