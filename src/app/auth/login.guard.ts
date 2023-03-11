import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const loggedIn = this.userService.isLoggedIn();

    if (loggedIn && state.url === '/login') {
      this.router.navigateByUrl('/');
      return false;
    }
    if (!loggedIn) {
      this.router.navigateByUrl('/login');
    }
    return loggedIn;
  }
}
