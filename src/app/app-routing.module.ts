import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/patient-dashboard', pathMatch: 'full' }, // Redirect to Dashboard by default
  { path: 'patientdashboard', component: PatientDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
