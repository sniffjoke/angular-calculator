import {Component, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {CommonModule} from "@angular/common";

export interface RateOptions {
  rates: number
  text?: string
}

@Component({
  selector: 'app-rate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rate.component.html',
  styleUrl: './rate.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: RateComponent
  }]
})
export class RateComponent implements ControlValueAccessor, OnInit {

  @Input() options!: RateOptions

  public currentRate!: number

  public ratesArr: number[] = []

  public disabled: boolean = false

  public touched: boolean = false

  onChange = (currentRate: number) => {
  }

  onTouched = () => {
  }

  ngOnInit() {
    this.fillRatesArr()
  }

  public onRate(index: number) {
    // this.currentRate = index
    this.markAsTouched()
    if (!this.disabled) {
      this.currentRate = index
      this.onChange(this.currentRate)
    }
  }


  // ContrValueAccessor methods start
  public writeValue(rate: number): void {
    this.currentRate = rate
  }

  public registerOnChange(fn: any) {
    this.onChange = fn
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  public setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled
  }

  public markAsTouched() {
    if (!this.touched) {
      this.onTouched()
      this.touched = true
    }
  }

  // ContrValueAccessor methods end

  private fillRatesArr(): void {
    let cond = true
    let count = 1
    while (cond) {
      this.ratesArr.push(count)
      if (count === this.options.rates) {
        cond = false
      } else {
        count++
      }
    }
  }

}
