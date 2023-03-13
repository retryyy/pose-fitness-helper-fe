import { Component } from '@angular/core';
import { UserService } from '../../auth/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(protected userService: UserService) {}
}
