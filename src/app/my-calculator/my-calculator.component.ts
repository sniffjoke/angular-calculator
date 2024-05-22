import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {KeyValuePipe, NgForOf} from "@angular/common";

interface CalcGroup {
  first: CalcVar,
  second: CalcVar,
  operations: CalcOperations
}

interface CalcVar {
  value: number
  modifier: CalcModifiers
}

enum CalcOperations {
  plus = '+',
  minus = '-',
  multiply = '*',
  divide = '/'
}

enum CalcModifiers {
  none = 'none',
  sin = 'sin',
  cos = 'cos',
  square = 'square'
}

@Component({
  selector: 'app-my-calculator',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgForOf, KeyValuePipe],
  templateUrl: './my-calculator.component.html',
  styleUrl: './my-calculator.component.scss'
})
export class MyCalculatorComponent {

  // public first: number = 1
  // public second: number = 1
  // public operation: string = '+'
  // public operations: string[] = ['+', '-', '/', '*']
  public calcOperations = CalcOperations
  public calcModifiers = CalcModifiers
  public calcGroups: CalcGroup[] = [
    {
      first: {
        value: 5,
        modifier: CalcModifiers.none
      },
      second: {
        value: 5,
        modifier: CalcModifiers.none
      },
      operations: CalcOperations.plus
    }
  ]
  public history: string[] = []
  public operationsBetweenGroups: CalcOperations[] = []
  public result?: number
  public addGroup(): void {
    this.calcGroups.push({
      first: {
        value: 0,
        modifier: CalcModifiers.none
      },
      second: {
        value: 0,
        modifier: CalcModifiers.none
      },
      operations: CalcOperations.plus
    })
  }
  public removeGroup(index: number): void {
    this.calcGroups.splice(index, 1)
  }
  // public calc() {
  //   switch (this.operation) {
  //     case '+':
  //       this.result = this.first + this.second;
  //       break
  //     case '-':
  //       this.result = this.first - this.second;
  //       break
  //     case '*':
  //       this.result = this.first * this.second;
  //       break
  //     case '/':
  //       this.result = this.first / this.second;
  //       break
  //   }
  // }



}
