import {Component} from "@angular/core";
import {NgFor} from "@angular/common";


@Component({
  selector: 'app-directives',
  templateUrl: 'directives.component.html',
  styleUrls: ['directives.component.scss'],
  standalone: true,
  imports: [NgFor]
})

export class DirectivesComponent {

  public colors: string[] = ['red', 'blue', 'green', 'yellow']

  public isShow = true

}
