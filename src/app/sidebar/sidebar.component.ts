import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface SideBarElem {
  title: string;
  navigate: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  protected sidebar: SideBarElem[] = [
    {
      title: 'Home',
      navigate: '/home',
    },
    {
      title: 'Upload data',
      navigate: '/upload',
    },
    {
      title: 'Analyze data',
      navigate: '/data',
    },
  ];

  constructor(private router: Router) {}

  navigate(url: string): void {
    this.router.navigateByUrl(url);
  }
}
