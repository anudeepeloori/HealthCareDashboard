import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

interface Patient {
  name: string;
  age: number;
  gender: string;
  profile_picture: string;
  phone_number: string;
}

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = 'https://fedskillstest.coalitiontechnologies.workers.dev/';

  // Encode "coalition:skills-test" in Base64
  private authToken = btoa('coalition:skills-test');

  private headers = new HttpHeaders({
    'Authorization': `Basic ${this.authToken}`
  });

  constructor(private http: HttpClient) {}

  getPatientData(): Observable<Patient | undefined> {
    return this.http.get<Patient[]>(this.apiUrl, { headers: this.headers }).pipe(
      map((patients: Patient[]) => {
        console.log("✅ API Response:", patients);
        return patients.find(patient => patient.name === 'Jessica Taylor');
      })
    );
  }

  getAllPatients(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { headers: this.headers });
  }
}
