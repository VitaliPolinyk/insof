import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart',
  imports: [BaseChartDirective],
  templateUrl: './chart.component.html',
  standalone: true,
  styleUrl: './chart.component.css'
})
export class ChartComponent {

  data: ChartData<'doughnut'> = {
    labels: ['one', 'two', 'three'],
    datasets: [
      {
        label: 'something',
        data: [320, 420, 100]
      }
    ]
  };

  options: ChartOptions<'doughnut'> = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
}
