import { Routes } from '@angular/router';
import {MyCalculatorComponent} from "./my-calculator/my-calculator.component";
import {EmptyRouteComponent} from "./components/empty-route/empty-route.component";
import {DirectivesComponent} from "./directives/directives.component";

export const routes: Routes = [
  {
    path: 'calculator',
    component: MyCalculatorComponent
  },
  {
    path: 'object-list',
    loadChildren: () => import('./object-list/object-list.module').then((m) => m.ObjectListModule)
  },
  {
    path: 'directives',
    component: DirectivesComponent
  },
  // {
  //   path: 'object-list',
  //   component: MyCalculatorComponent,
  //   children: [
  //     {
  //       path: 'something/:id'
  //     }
  //   ]
  // },
  {
    path: '',
    redirectTo: 'calculator',
    pathMatch: "full"
  },
  {
    path: '**',
    component: EmptyRouteComponent
  }
];
