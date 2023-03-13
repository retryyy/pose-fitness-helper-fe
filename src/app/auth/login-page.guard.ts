import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root',
})
export class LoginPageGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(): boolean {
    const loggedIn = this.userService.isLoggedIn();

    if (loggedIn) {
      this.router.navigateByUrl('/');
    }
    return !loggedIn;
  }
}
