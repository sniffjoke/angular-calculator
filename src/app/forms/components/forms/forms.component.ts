import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

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
