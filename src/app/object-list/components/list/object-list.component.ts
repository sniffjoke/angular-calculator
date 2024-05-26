import {Component} from "@angular/core";


@Component({
  selector: 'my-object-list',
  templateUrl: 'object-list.component.html',
  styleUrls: ['object-list.component.scss']
})

export class ObjectListComponent {
  public myObjects = myObjects

  public redirectTo(id: number): void {

  }
}

export const myObjects: MyObject[] = [
  {
    title: 'Первый',
    content: 'Lorem ipsum',
    id: 1
  },
  {
    title: 'Второй',
    content: 'Lorem ipsum',
    id: 2
  },
  {
    title: 'Третий',
    content: 'Lorem ipsum',
    id: 3
  },
  {
    title: 'Четвертый',
    content: 'Lorem ipsum',
    id: 4
  },
  {
    title: 'Пятый',
    content: 'Lorem ipsum',
    id: 5
  }
]

export interface MyObject {
  title: string
  content: string
  id: number
}
