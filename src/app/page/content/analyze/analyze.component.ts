import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/common/popup/popup.component';
import { FileService } from 'src/app/service/file.service';

export interface Doc {
  file_id: string;
  thumbnail: string;
  created: Date;
}

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.scss'],
})
export class AnalyzeComponent implements OnInit {
  docs?: Doc[];

  constructor(private fileService: FileService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.fileService.loadFiles().subscribe((response) => {
      this.docs = response.data;
    });
  }

  deleteDocById(id: string): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      data: {
        title: 'Deleting exercise',
        message: "Do you really want to delete this file? Can't recover later!",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fileService.deleteFile(id).subscribe(() => {
          this.docs = this.docs?.filter((doc) => doc.file_id !== id);
        });
      }
    });
  }
}
