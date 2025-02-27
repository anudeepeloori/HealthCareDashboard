import { Component, Input, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnChanges {
  @Input() history: any[] = []; // Only filtered data is passed
  chart: any;

  constructor(private elementRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['history'] && !changes['history'].firstChange) {
      this.updateChart();
    }
  }

  createChart(): void {
    if (!this.history || this.history.length === 0) {
      console.warn("No data available for graph.");
      return;
    }
  
    const labels = this.history.map(record => `${record.month} ${record.year}`);
    const systolicData = this.history.map(record => record.blood_pressure.systolic.value);
    const diastolicData = this.history.map(record => record.blood_pressure.diastolic.value);
  
    const canvas = this.elementRef.nativeElement.querySelector('#bloodPressureChart');
  
    this.chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Systolic Pressure',
            data: systolicData,
            borderColor: '#D700F5',
            backgroundColor: 'rgba(215, 0, 245, 0.2)',
            borderWidth: 2,
            fill: true
          },
          {
            label: 'Diastolic Pressure',
            data: diastolicData,
            borderColor: '#7354F5',
            backgroundColor: 'rgba(115, 84, 245, 0.2)',
            borderWidth: 2,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false,
            min: 60,  // 👈 Forces Y-axis to start at 60
            max: 200, // 👈 Forces Y-axis to end at 200
            ticks: {
              stepSize: 20, 
              precision: 0,  
              callback: function(value) { 
                return value;  
              }
            }
          }
        }
      }
    });
  }
  

  updateChart(): void {
    if (this.chart) {
      this.chart.destroy(); // Destroy existing chart to refresh data
    }
    this.createChart();
  }
}
