import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {KeyValuePipe, NgForOf, NgIf} from "@angular/common";

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
  imports: [FormsModule, ReactiveFormsModule, NgForOf, KeyValuePipe, NgIf],
  templateUrl: './my-calculator.component.html',
  styleUrl: './my-calculator.component.scss'
})
export class MyCalculatorComponent {

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

    this.operationsBetweenGroups.push(CalcOperations.plus)
  }

  public removeGroup(index: number): void {
    this.calcGroups.splice(index, 1)
    this.operationsBetweenGroups.splice(index-1, 1)
  }

  public calcGroup() {
    let result = 0

    let tempHistory: string[] = []

    this.calcGroups.forEach((group, i) => {
      if (i === 0) {
        result = this.calc(
          this.calcValueWithModif(group.first),
          this.calcValueWithModif(group.second),
          group.operations
        )
      } else {
      let tempResult = this.calc(
        this.calcValueWithModif(group.first),
        this.calcValueWithModif(group.second),
        group.operations
      )
        result = this.calc(result, tempResult, this.operationsBetweenGroups[i-1])
      }
      tempHistory.push(
        `(
          ${group.first.modifier !== CalcModifiers.none ? group.first.modifier : ''} ${group.first.value}
          ${group.operations}
          ${group.second.modifier !== CalcModifiers.none ? group.second.modifier : ''} ${group.second.value}
          )`
      )
    })

    tempHistory.push(`= ${result}`)
    this.history.push(tempHistory.join(' '))

    this.result = result

  }

  public calcValueWithModif(value: CalcVar): number {
    switch (value.modifier) {
      case CalcModifiers.none:
        return value.value
      case CalcModifiers.cos:
        return Math.cos(value.value)
      case CalcModifiers.sin:
        return Math.sin(value.value)
      case CalcModifiers.square:
        return Math.pow(value.value, 2)
    }
  }

  public calc(first: number, second: number, operation: CalcOperations): number {
    switch (operation) {
      case CalcOperations.plus:
        return first + second
      case CalcOperations.minus:
        return first - second
      case CalcOperations.multiply:
        return first * second
      case CalcOperations.divide:
        return first / second
    }
  }

}
