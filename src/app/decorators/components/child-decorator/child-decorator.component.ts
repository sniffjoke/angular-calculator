import { Component } from '@angular/core';

@Component({
  selector: 'app-child-decorator',
  standalone: true,
  imports: [],
  templateUrl: './child-decorator.component.html',
  styleUrl: './child-decorator.component.scss'
})
export class ChildDecoratorComponent {
  public title = 'Hello'

  private second = 'World'
}
