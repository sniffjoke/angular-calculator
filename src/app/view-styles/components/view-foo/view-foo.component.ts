import {ChangeDetectorRef, Component, ViewEncapsulation} from '@angular/core';
import {ViewBarComponent} from "../view-bar/view-bar.component";
import {UserService} from "../../../user.service";
import {TodoItemComponent} from "../todo-item/todo-item.component";

export interface TodoItemI {
  text: string;
}

@Component({
  selector: 'app-view-foo',
  standalone: true,
  imports: [
    ViewBarComponent,
    TodoItemComponent
  ],
  templateUrl: './view-foo.component.html',
  styleUrl: './view-foo.component.scss',
  styles: [
    'h1 {color: green}'
  ],
  encapsulation: ViewEncapsulation.None
})
export class ViewFooComponent {

  public todoArr: TodoItemI[] = [
    {
      text: 'Foo1'
    },
    {
      text: 'Foo2',
    },
    {
      text: 'Foo3',
    }
  ]

  constructor(private _userService: UserService, private _cdr: ChangeDetectorRef) {}

  public login(): void {
    this._userService.login()
    this._cdr.detectChanges()
  }

  public changeText(): void {
    this.todoArr[0] = {...this.todoArr[0], text: 'Foo changed'};
  }

  public changeStream(): void {
    this._userService.StringSubject$.next('Two')
  }

}
