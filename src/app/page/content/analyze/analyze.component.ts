import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/common/popup/popup.component';
import { FileService } from 'src/app/service/file.service';

export interface ExerciseThumbnail {
  id: string;
  thumbnail: string;
  created: Date;
  name: string;
  type: string;
}

export interface ExerciseFile {
  file: string;
}
export interface Exercise {
  name: string;
  type: string;
  files: ExerciseFile[];
}

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.scss'],
})
export class AnalyzeComponent implements OnInit {
  exercises?: ExerciseThumbnail[];

  constructor(private fileService: FileService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.fileService.loadFiles().subscribe((response) => {
      this.exercises = response.data;
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
          // this.docs = this.docs?.filter((doc) => doc.file_id !== id);
        });
      }
    });
  }
}
