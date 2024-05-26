import { Routes } from '@angular/router';
import {MyCalculatorComponent} from "./my-calculator/my-calculator.component";
import {EmptyRouteComponent} from "./components/empty-route/empty-route.component";

export const routes: Routes = [
  {
    path: 'calculator',
    component: MyCalculatorComponent
  },
  {
    path: '**',
    component: EmptyRouteComponent
  }
];
