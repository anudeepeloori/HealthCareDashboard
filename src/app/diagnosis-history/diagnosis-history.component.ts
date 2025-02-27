import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-diagnosis-history',
  templateUrl: './diagnosis-history.component.html',
  styleUrls: ['./diagnosis-history.component.css']
})
export class DiagnosisHistoryComponent {
  @Input() diagnosticList: any[] = [];
}
