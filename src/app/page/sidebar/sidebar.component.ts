import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  UploadComponent,
  VideoUpload,
} from '../content/upload/upload.component';
import { MatDialog } from '@angular/material/dialog';

interface SideBarElem {
  title: string;
  navigate?: string;
  icon: string;
  click?: Function;
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
      navigate: '/analysis',
      icon: 'query_stats',
    },
    {
      title: 'Extract joint points',
      click: () => {
        const dialogRef = this.dialog.open(UploadComponent, {
          disableClose: true,
        });

        dialogRef.afterClosed().subscribe((result: VideoUpload) => {
          if (result) {
            this.download(result);
          }
        });
      },
      icon: 'download',
    },
  ];

  constructor(private router: Router, public dialog: MatDialog) {}

  navigate(url: string | undefined): void {
    if (url) {
      this.router.navigateByUrl(url);
    }
  }

  private download(content: object): void {
    const jsonString = JSON.stringify(content);

    const filename = 'points.json';
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}
