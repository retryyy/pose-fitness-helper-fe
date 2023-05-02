import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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

  constructor(
    private fileService: FileService,
    public dialog: MatDialog,
    private router: Router
  ) {
    const state = this.router.getCurrentNavigation()?.extras.state as {
      exerciseType: string;
    };

    if (state?.exerciseType) {
      this.setExerciseType(state.exerciseType);
    }
  }

  setExerciseType(exerciseType: string): void {
    this.chosenExercise = exerciseType;
    this.loading = true;

    this.fileService
      .loadExercises(this.chosenExercise)
      .subscribe((response) => {
        this.exercises = response.data;
        this.loading = false;
      });
  }

  navigateBack(): void {
    this.exercises = [];
    this.chosenExercise = undefined;
  }

  deleteExercise(id: string): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      data: {
        title: 'Deleting exercise',
        message:
          "Do you really want to delete this exercise? Can't recover later!",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fileService.deleteExercise(id).subscribe(() => {
          this.exercises = this.exercises?.filter(
            (exercise) => exercise.id !== id
          );
        });
      }
    });
  }
}
