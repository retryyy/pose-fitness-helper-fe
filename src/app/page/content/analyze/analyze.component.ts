import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/common/popup/popup.component';
import { ExerciseThumbnail } from 'src/app/interface/exercise';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.scss'],
})
export class AnalyzeComponent {
  chosenExercise?: string;
  exercises?: ExerciseThumbnail[];
  loading: boolean = false;

  constructor(private fileService: FileService, public dialog: MatDialog) {}

  setExerciseType(exerciseType: string): void {
    this.chosenExercise = exerciseType;
    this.loading = true;

    this.fileService.loadFiles(this.chosenExercise).subscribe((response) => {
      this.exercises = response.data;
      this.loading = false;
    });
  }

  navigateBack(): void {
    this.exercises = [];
    this.chosenExercise = undefined;
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
          this.exercises = this.exercises?.filter(
            (exercise) => exercise.id !== id
          );
        });
      }
    });
  }
}
