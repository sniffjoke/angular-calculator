import {
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input, OnChanges,
  OnDestroy,
  OnInit,
  Output, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})

export class ChildComponent implements OnInit, DoCheck, AfterContentInit, AfterViewInit, OnDestroy, OnChanges {
  @Input() title!: string

  @Output() eventChange = new EventEmitter<string>()

  constructor() {
    console.log('%cConstructor', 'color: red')
  }

  public tempTitle!: string

  ngOnInit(): void {
    console.log('%cOnInit', 'color: blue')
    this.tempTitle = this.title
  }

  ngDoCheck(): void {
    console.log('%cDoCheck', 'color: orange')
  }

  ngAfterContentInit() {
    console.log('%cAfterContentInit', 'color: yellow')
  }

  ngAfterViewInit() {
    console.log('%cAfterViewInit', 'color: violet')
  }

  ngOnDestroy() {
    console.log('%cOnDestroy', 'color: green')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    console.log('%cOnChanges', 'color: cyan')
  }

  public clickHandler(): void {
    this.tempTitle = 'I am mutated'
    this.eventChange.emit(this.tempTitle)
  }

}
