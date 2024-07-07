import {ChangeDetectorRef, Component, ViewEncapsulation} from '@angular/core';
import {ViewBarComponent} from "../view-bar/view-bar.component";
import {UserService} from "../../../user.service";
import {TodoItemComponent} from "../todo-item/todo-item.component";
import {animate, state, style, transition, trigger} from "@angular/animations";

export interface TodoItemI {
  text: string;
}

// const enterTransition = transition(':enter', [
//   style({opacity: 0}),
//   animate('2s ease-in', style({opacity: 1})),
// ])

// const leaveTransition = transition(':leave', [
//   style({opacity: 1}),
//   animate('1s ease-in', style({opacity: 0})),
// ])

// const fadeIn = trigger('fadeIn', [enterTransition])
// const fadeOut = trigger('fadeOut', [leaveTransition])

const fadeInOut = trigger('fadeInOut', [
  state('open', style({opacity: 1})),
  state('close', style({opacity: 0})),
  transition('open => *', [animate('1s ease-out')]),
  transition('close => open', [animate('1s ease-in')])
])

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
  encapsulation: ViewEncapsulation.None,
  // animations: [fadeIn, fadeOut]
  animations: [fadeInOut]
})
export class ViewFooComponent {

  public isShow = false

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

  constructor(private _userService: UserService, private _cdr: ChangeDetectorRef) {
  }

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

  public onAnimationStart(event: any) {
    console.log('Start', event)
  }

  public onAnimationDone(event: any) {
    console.log('Done', event)
  }

}
