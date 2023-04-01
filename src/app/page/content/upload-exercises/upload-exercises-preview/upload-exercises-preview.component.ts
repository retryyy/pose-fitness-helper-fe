import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/common/popup/popup.component';

@Component({
  selector: 'app-upload-exercises-preview',
  templateUrl: './upload-exercises-preview.component.html',
  styleUrls: ['./upload-exercises-preview.component.scss'],
})
export class UploadExercisesPreviewComponent {
  @Input() file?: string;
  @Input() index?: number;
  @Output() deleteGifEvent = new EventEmitter<number>();

  entered: boolean = false;

  constructor(public dialog: MatDialog) {}

  deleteGif(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      data: {
        title: 'Deleting video',
        message: 'Do you really want to delete this video?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteGifEvent.emit(this.index);
      }
    });
  }
}
