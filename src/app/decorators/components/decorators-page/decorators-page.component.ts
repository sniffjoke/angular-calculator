import { Component } from '@angular/core';
import {NgForOf, NgIf, NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-decorators-page',
  standalone: true,
  imports: [
    NgForOf,
    NgTemplateOutlet,
    NgIf
  ],
  templateUrl: './decorators-page.component.html',
  styleUrl: './decorators-page.component.scss'
})
export class DecoratorsPageComponent {

  public arr = [1, 2, 3, 4, 5]

  public isShow = true
}
