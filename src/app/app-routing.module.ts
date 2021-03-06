import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './modules/introduction/introduction.component';
import { SignUpSuccessComponent } from './modules/sign-up/sign-up-success/sign-up-success.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { MaintenanceComponent } from './shared/components/maintenance/maintenance.component';


const routes: Routes = [
  { path: '', component: IntroductionComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signup-success', component: SignUpSuccessComponent },
  { path: 'maintenance', component: MaintenanceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
