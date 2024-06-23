import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {ChildDecoratorComponent} from "../child-decorator/child-decorator.component";

@Component({
  selector: 'app-decorators-page',
  standalone: true,
  imports: [
    ChildDecoratorComponent
  ],
  templateUrl: './decorators-page.component.html',
  styleUrl: './decorators-page.component.scss'
})
export class DecoratorsPageComponent implements AfterViewInit {

  public arr = [1, 2, 3, 4, 5]

  public isShow = true

  @ViewChild('paragraph', {read: ''}) paragraph?: ElementRef<HTMLParagraphElement>;
  @ViewChild('paragraphTemplate') paragraphTemplate?: TemplateRef<HTMLParagraphElement>;
  @ViewChild(ChildDecoratorComponent) childComponent?: ChildDecoratorComponent;

  @ViewChildren(ChildDecoratorComponent) childComponents?: QueryList<ChildDecoratorComponent>

  public ngAfterViewInit() {
    // console.log(this.paragraph)
    // console.log(this.paragraphTemplate)
    // console.log(this.childComponent)
    // console.log(this.childComponents)
  }
}
