import { Routes } from '@angular/router';
import {MyCalculatorComponent} from "./my-calculator/components/my-calculator.component";
import {EmptyRouteComponent} from "./components/empty-route/empty-route.component";
import {DirectivesComponent} from "./directives/directives.component";
import {ParentComponent} from "./lifecycle/components/parent/parent/parent.component";
import {PipesComponent} from "./pipes/components/pipes/pipes.component";
import {FormsComponent} from "./forms/components/forms/forms.component";
import {DecoratorsPageComponent} from "./decorators/components/decorators-page/decorators-page.component";
import {ViewFooComponent} from "./view-styles/components/view-foo/view-foo.component";
import {isLoggedGuardFn} from "./is-logged.guard";

export const routes: Routes = [
  {
    path: 'calculator',
    component: MyCalculatorComponent,
    canDeactivate: [
      (component: MyCalculatorComponent) => !component.canLeave
    ]
  },
  {
    path: 'object-list',
    loadChildren: () => import('./object-list/object-list.module').then((m) => m.ObjectListModule)
  },
  {
    path: 'directives',
    component: DirectivesComponent
  },
  {
    path: 'life-cycle',
    component: ParentComponent
  },
  {
    path: 'requests',
    // component:PostListComponent
    loadChildren: () => import('./requests/request-routing.module').then((m) => m.RequestRouting),
    canActivate: [isLoggedGuardFn],
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'decorators',
    component: DecoratorsPageComponent
  },
  {
    path: 'styles',
    component: ViewFooComponent,
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
