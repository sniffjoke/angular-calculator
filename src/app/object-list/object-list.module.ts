import {NgModule} from "@angular/core";
import {ObjectListComponent} from "./components/list/object-list.component";
import {ObjectItemComponent} from "./components/item/object-item.component";
import {CommonModule} from "@angular/common";
import {ObjectListRoutingModule} from "./object-list-routing.module";


@NgModule({
  imports: [CommonModule, ObjectListRoutingModule],
  exports: [ObjectListComponent, ObjectItemComponent],
  declarations: [ObjectListComponent, ObjectItemComponent],
  providers: []
})

export class ObjectListModule {

}
