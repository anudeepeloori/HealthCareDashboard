import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.scss']
})
export class PatientDashboardComponent implements OnInit {
  patients: any[] = []; 
  patient: any = {}; 
  diagnosticList:any[]=[];
  filteredDiagnosisHistory: any[] = []; 

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.getAllPatients().subscribe(data => {
      this.patients = data;
      this.patient = this.patients.find(p => p.name === 'Jessica Taylor'); 
      
      if (this.patient) {
        this.filterLastSixMonths(); 
        this.diagnosticList = this.patient.diagnostic_list || [];
      }
    });
  }

  filterLastSixMonths(): void {
    if (!this.patient || !this.patient.diagnosis_history) return;
  
    this.filteredDiagnosisHistory = this.patient.diagnosis_history.filter((entry: any) => {
      const entryDate = new Date(`${entry.month} 1, ${entry.year}`);
      
      // Define the date range: October 2023 to March 2024
      const startDate = new Date("October 1, 2023");
      const endDate = new Date("March 1, 2024");
  
      return entryDate >= startDate && entryDate <= endDate;
      
    });
  
    console.log("Filtered Data (March 2024 to Oct 2023):", this.filteredDiagnosisHistory);
  }
  
}
