import {AfterContentInit, Component, ContentChildren, ElementRef, QueryList} from '@angular/core';

@Component({
  selector: 'app-child-decorator',
  standalone: true,
  imports: [],
  templateUrl: './child-decorator.component.html',
  styleUrl: './child-decorator.component.scss'
})
export class ChildDecoratorComponent implements AfterContentInit {
  // public title = 'Hello'

  // private second = 'World'

  @ContentChildren('paragraph') paragraph!: QueryList<ElementRef<HTMLParagraphElement>>

  public ngAfterContentInit() {
    this.paragraph && console.log(this.paragraph)
  }

}
