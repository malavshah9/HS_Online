import { MyPipePipe } from './my-pipe.pipe';
import { NgModule } from '@angular/core';
// import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    MyPipePipe
  ],
  imports: [
  ],
  exports: [
    MyPipePipe
  ],
  providers:[
    MyPipePipe
  ]
})
export class MyPipeModule {
  static forRoot() {
    return {
        ngModule: MyPipeModule,
        providers: [],
    };
 }
}