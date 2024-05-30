import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[myChangeColor]',
  standalone: true
})
export class MyChangeColorDirectiveDirective implements AfterViewInit {

  // colors = ['red', 'green', 'blue']

  @Input('myChangeColor') colors?: string[]

  private _el: ElementRef

  constructor(el: ElementRef) {
    // this.changeColor(el)
    this._el = el
  }

  ngAfterViewInit(): void {
    this.changeColor(this._el)
  }

  private changeColor(el: ElementRef) {
    if (this.colors && this.colors.length !== 0) {
      setInterval(() => {
        el.nativeElement.style.color = this.colors![Math.floor(Math.random() * this.colors!.length)]
      }, 2000)
    } else {

    }
  }

}
