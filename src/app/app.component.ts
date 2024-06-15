import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MyCalculatorModule} from "./my-calculator/my-calculator.module";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {RequestModule} from "./requests/request-module.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyCalculatorModule, NavigationComponent, RequestModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
