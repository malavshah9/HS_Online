import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-double-jackpot',
  templateUrl: './double-jackpot.page.html',
  styleUrls: ['./double-jackpot.page.scss'],
})

export class DoubleJackpotPage implements OnInit {
  myIndex: String[] = [];
  angForm: FormGroup;
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
  onSubmit(){
    for (let i = 0; i <this.names.length; i++) {
      console.log(this.names.at(i).value);
    }
  }
  ngOnInit() {
    
    console.log(this.angForm);
    console.log(this.angForm.controls.names);
  }

}
