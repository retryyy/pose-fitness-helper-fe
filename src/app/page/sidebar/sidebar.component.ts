import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface SideBarElem {
  title: string;
  navigate: string;
  icon: string;
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
      navigate: '/',
      icon: 'home',
    },
    {
      title: 'Upload data',
      navigate: '/upload',
      icon: 'upload_file',
    },
    {
      title: 'Analyze data',
      navigate: '/analyze',
      icon: 'query_stats',
    },
  ];

  constructor(private router: Router) {}

  navigate(url: string): void {
    this.router.navigateByUrl(url);
  }
}
