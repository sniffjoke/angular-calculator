import {AfterViewInit, Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[myChangeColor]',
  standalone: true
})
export class MyChangeColorDirectiveDirective implements AfterViewInit {

  // colors = ['red', 'green', 'blue']

  // @Input('myChangeColor') colors?: string[]

  // private _el: ElementRef

  // constructor(el: ElementRef) {
    // this.changeColor(el)
    // this._el = el
  // }

  @HostBinding('style.color') color: string = 'orange'
  // @HostBinding('class.directive') class: boolean = true
  @HostBinding('style.background') background: string = 'transparent'

  @HostListener('document:click', ['$event']) handleClick(): void {
    // console.log('click',  event)
    console.log(this.color)
  }
  @HostListener('mouseenter') handleEnter(): void {
    this.background = this.color
  }

  @HostListener('mouseleave') handleLeave(): void {
    this.background = 'transparent'
  }

  constructor() {
  }

  ngAfterViewInit(): void {
    // this.changeColor(this._el)
    if (this.color) {
      setInterval(() => {
        this.color = this.getChangeColor()
      }, 2500)
    }
  }

  private getChangeColor(): string {
      return '#' + Math.floor(Math.random() * 16777215).toString(16)
  }

  // private changeColor(el: ElementRef) {
  //   if (this.colors && this.colors.length !== 0) {
  //     setInterval(() => {
  //       el.nativeElement.style.color = this.colors![Math.floor(Math.random() * this.colors!.length)]
  //     }, 2000)
  //   } else {
  //
  //   }
  // }

}
