import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'gridster', loadComponent: () => import('../component/gridster-test/gridster-test.component').then(({GridsterTestComponent}) => GridsterTestComponent)},
  { path: 'chart', loadComponent: () => import('../component/chart/chart.component').then(({ChartComponent}) => ChartComponent)},
  { path: '', redirectTo: 'gridster', pathMatch: 'full' },
];
