import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProgramPage } from './program.page';
import { MyPipeModule } from '../shared/my-pipe.module';

const routes: Routes = [
  {
    path: '',
    component: ProgramPage
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
  declarations: [ProgramPage]
})
export class ProgramPageModule {}
