import { Component } from '@angular/core';
import { GridsterConfig, GridsterItem, GridsterModule } from 'angular-gridster2';

@Component({
  selector: 'app-gridster',
  imports: [
    GridsterModule
  ],
  templateUrl: './gridster-test.component.html',
  standalone: true,
  styleUrl: './gridster-test.component.css'
})
export class GridsterTestComponent {
  options: GridsterConfig = {
    itemChangeCallback: GridsterTestComponent.itemChange,
    itemResizeCallback: GridsterTestComponent.itemResize,
  };
  dashboard: Array<GridsterItem> = [
    {cols: 2, rows: 1, y: 0, x: 0},
    {cols: 2, rows: 2, y: 0, x: 2},
    {cols: 12, rows: 3, y: 0, x: 3},
    {cols: 8, rows: 4, y: 2, x: 2},
    {cols: 2, rows: 2, y: 0, x: 2},
  ];

  static itemChange(item: any, itemComponent: any) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item: any, itemComponent: any) {
    console.info('itemResized', item, itemComponent);
  }
}
