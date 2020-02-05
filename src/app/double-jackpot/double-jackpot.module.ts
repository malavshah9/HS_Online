import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DoubleJackpotPage } from './double-jackpot.page';

const routes: Routes = [
  {
    path: '',
    component: DoubleJackpotPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DoubleJackpotPage]
})
export class DoubleJackpotPageModule {}
