import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public isUserLoggedIn = new BehaviorSubject<boolean>(false)

  public StringSubject$ = new BehaviorSubject<string>('One')

  constructor() { }

  public login(): void {
    this.isUserLoggedIn.next(true)
  }

}
