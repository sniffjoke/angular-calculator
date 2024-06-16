import { Component } from '@angular/core';
import {DatePipe, LowerCasePipe, UpperCasePipe} from "@angular/common";
import {MyCustomPipe} from "./pipe/my-custom.pipe";

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    MyCustomPipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {

  public name = 'dazhe i ne starayus'
  public surname = 'Developer'

  public date = new Date().toDateString()

}
