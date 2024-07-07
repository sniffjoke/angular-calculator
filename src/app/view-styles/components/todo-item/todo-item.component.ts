import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TodoItemI} from "../view-foo/view-foo.component";
import {UserService} from "../../../user.service";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {
  @Input('todo') todoItem!: TodoItemI

  public subject$: Observable<string>;

  constructor(private _userService: UserService) {
    this.subject$ = this._userService.StringSubject$
  }

  public returnBool(): boolean {
    console.log('componentRendered')
    return true
  }

  public changeInsideText(): void {
    this.todoItem.text = 'change from inside'
  }

}
