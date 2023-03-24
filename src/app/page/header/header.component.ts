import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(protected userService: UserService, private router: Router) {}

  logout(): void {
    this.userService.removeToken();
    this.router.navigateByUrl('/login');
  }
}
