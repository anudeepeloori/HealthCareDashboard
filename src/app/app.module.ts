import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { DiagnosisHistoryComponent } from './diagnosis-history/diagnosis-history.component';
import { GraphComponent } from './graph/graph.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, PatientDashboardComponent, PatientInfoComponent, DiagnosisHistoryComponent, GraphComponent, NavbarComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
