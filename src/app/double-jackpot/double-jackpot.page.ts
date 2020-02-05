import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-double-jackpot',
  templateUrl: './double-jackpot.page.html',
  styleUrls: ['./double-jackpot.page.scss'],
})

export class DoubleJackpotPage implements OnInit {
  jackPotControls: FormArray[] = [];
  myIndex: String[] = [];
  doubleJackpotForm: FormGroup;
  constructor() {
    // for (var i = 1; i < 11; i++) { // Creating 10 objects
    //   window["txt" + i] = new FormControl();
    // }
    // console.log(txt9);
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
    for (let i = 0; i < 100; i++) {
      //eval('dynamic' + i = 'new FormControl()');
      this.jackPotControls.push(new FormControl());
    }
    this.doubleJackpotForm = new FormGroup({
      jackpots: new FormArray(this.jackPotControls)
    });
  }

  ngOnInit() {
    console.log(this.jackPotControls);
  }

}
