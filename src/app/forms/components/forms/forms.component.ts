import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";

export function checkRegExp(regExp: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = regExp.test(control.value)
    return !forbidden ? {forbiddenValue: {value: control.value}} : null
  }
}

export const confirmPassword: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  return control.value.password_one === control.value.password_two ? null : {PasswordDoNotMatch: true}
}

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit {
  public myForm = new FormGroup({
    login: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  public validatorsForm = new FormGroup(
    {
      mail: new FormControl('', checkRegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)),
      password_one: new FormControl(''),
      password_two: new FormControl('')
    },
    // {
    //   validators: [confirmPassword]
    // }
    confirmPassword
  )

  public ngOnInit() {
  }

  public handleValue() {
    if (this.myForm.valid) {
      console.log(this.myForm.value)
    } else {
      console.log('Форма не валидна')
    }
    // console.log(this.myForm.get(['login'])?.value)
  }

}
