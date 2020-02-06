import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-double-jackpot',
  templateUrl: './double-jackpot.page.html',
  styleUrls: ['./double-jackpot.page.scss'],
})

export class DoubleJackpotPage implements OnInit {
  jackPotControls: FormArray[] = [];
  myIndex: String[] = [];
  doubleJackpotForm: FormGroup;
  myControls:FormControl[]=[];
  constructor(    private fb: FormBuilder ,public route: Router   ) {
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
    
    this.doubleJackpotForm = new FormGroup({
      jackpots:new FormArray([])
    });
  }
  get addDynamicElement() {
    return this.doubleJackpotForm.get('jackpots') as FormArray
  }
  onExit(){
    this.route.navigateByUrl('/program');
  }
  addItems(){
    this.addDynamicElement.push(this.fb.control(''))
  }
  ngOnInit() {
    for(let i=0;i<100;i++){
      this.addItems();
    }
    console.log(this.doubleJackpotForm);
  }

}
