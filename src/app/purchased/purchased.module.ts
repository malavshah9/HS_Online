import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PurchasedPage } from './purchased.page';
import { MyPipeModule } from '../shared/my-pipe.module';

const routes: Routes = [
  {
    path: '',
    component: PurchasedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MyPipeModule
  ],
  declarations: [PurchasedPage]
})
export class PurchasedPageModule {}
