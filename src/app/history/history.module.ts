import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HistoryComponent } from './history.component';
import { MyPipeModule } from '../shared/my-pipe.module';

const routes: Routes = [
  {
    path: '',
    component: HistoryComponent
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
  declarations: [HistoryComponent]
})
export class HistoryPageModule {}
