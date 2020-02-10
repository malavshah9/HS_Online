import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

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
  { path: 'purchased', loadChildren: './purchased/purchased.module#PurchasedPageModule',canActivate: [AuthGuardService] },
  { path: 'history', loadChildren: './history/history.module#HistoryPageModule',canActivate: [AuthGuardService] },
  { path: 'program', loadChildren: './program/program.module#ProgramPageModule',canActivate: [AuthGuardService] },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule',canActivate: [AuthGuardService] },
  { path: 'changepass', loadChildren: './changepass/changepass.module#ChangepassPageModule',canActivate: [AuthGuardService] },
  { path: 'double-jackpot', loadChildren: './double-jackpot/double-jackpot.module#DoubleJackpotPageModule',canActivate: [AuthGuardService] }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
