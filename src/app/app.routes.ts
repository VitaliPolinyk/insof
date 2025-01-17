import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'gridster', loadComponent: () => import('../component/gridster/gridster.component').then(({GridsterComponent}) => GridsterComponent)},
  { path: 'chart', loadComponent: () => import('../component/chart/chart.component').then(({ChartComponent}) => ChartComponent)},
  { path: '', redirectTo: 'gridster', pathMatch: 'full' },
];
