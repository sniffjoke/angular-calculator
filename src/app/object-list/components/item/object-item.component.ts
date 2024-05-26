import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {MyObject, myObjects} from "../list/object-list.component";


@Component({
  selector: 'my-object-item',
  templateUrl: 'object-item.component.html',
  styleUrls: ['object-item.component.scss']
})

export class ObjectItemComponent implements OnInit {

  public object?: MyObject

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.object = myObjects[params['id'] - 1]
    })
  }

}
