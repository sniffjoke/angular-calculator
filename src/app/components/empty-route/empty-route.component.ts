import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'empty-page',
  templateUrl: 'empty-route.component.html',
  styleUrls: ['empty-route.component.scss'],
  imports: [
    RouterLink
  ],
  standalone: true
})

export class EmptyRouteComponent {

}
