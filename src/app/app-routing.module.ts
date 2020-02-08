import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // {
  //   path: 'splash',
  //   loadChildren: () => import('./splash/splash.module').then(m => m.SplashPageModule)
  // },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'purchased', loadChildren: './purchased/purchased.module#PurchasedPageModule' },
  { path: 'history', loadChildren: './history/history.module#HistoryPageModule' },
  { path: 'program', loadChildren: './program/program.module#ProgramPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'changepass', loadChildren: './changepass/changepass.module#ChangepassPageModule' },
  { path: 'double-jackpot', loadChildren: './double-jackpot/double-jackpot.module#DoubleJackpotPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
