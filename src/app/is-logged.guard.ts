import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import {inject, Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuardService implements CanActivate {

  constructor(private _userService: UserService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this._userService.isUserLoggedIn.pipe(
      map(isLoggedIn => {
        if (isLoggedIn) {
          return true
        } else {
          return false
        }
      })
    )
  }

}

export const isLoggedGuardFn: CanActivateFn = (route, state) => {
  return inject(UserService).isUserLoggedIn
};
