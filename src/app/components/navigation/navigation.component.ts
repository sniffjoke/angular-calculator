import {Component} from "@angular/core";
import {RouterLink, RouterLinkActive} from "@angular/router";


@Component({
  selector: 'my-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.scss'],
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  standalone: true
})

export class NavigationComponent {

}
