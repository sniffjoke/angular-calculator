import {Component, ViewEncapsulation} from '@angular/core';
import {ViewBarComponent} from "../view-bar/view-bar.component";

@Component({
  selector: 'app-view-foo',
  standalone: true,
  imports: [
    ViewBarComponent
  ],
  templateUrl: './view-foo.component.html',
  styleUrl: './view-foo.component.scss',
  styles: [
    'h1 {color: green}'
  ],
  encapsulation: ViewEncapsulation.None
})
export class ViewFooComponent {

}
