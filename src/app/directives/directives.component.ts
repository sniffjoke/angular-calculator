import {Component} from "@angular/core";
import {CommonModule, NgFor} from "@angular/common";
import {MyChangeColorDirectiveDirective} from "./directive/my-change-color-directive.directive";
import {MyIfDirective} from "./directive/my-if-directive.directive";


@Component({
  selector: 'app-directives',
  templateUrl: 'directives.component.html',
  styleUrls: ['directives.component.scss'],
  standalone: true,
  imports: [NgFor, CommonModule, MyChangeColorDirectiveDirective, MyIfDirective]
})

export class DirectivesComponent {

  public colors: string[] = ['red', 'blue', 'green', 'yellow']

  public isShow = true

  public currentColor: string = this.colors[0]

  public elementStyle: any = {
    color: 'red',
    opacity: 0.5,
  }

}
