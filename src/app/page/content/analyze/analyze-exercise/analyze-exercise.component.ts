import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PopupComponent } from 'src/app/common/popup/popup.component';
import { Exercise } from 'src/app/interface/exercise';
import { FileService } from 'src/app/service/file.service';
import { UploadComponent, VideoUpload } from '../../upload/upload.component';
import { dataURItoBlob } from 'src/app/util/string-to-file';

@Component({
  selector: 'app-analyze-exercise',
  templateUrl: './analyze-exercise.component.html',
  styleUrls: ['./analyze-exercise.component.scss'],
})
export class AnalyzeExerciseComponent implements OnInit {
  exerciseId: string | null;
  exercise?: Exercise;

  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fileService: FileService,
    public dialog: MatDialog
  ) {
    this.exerciseId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.loadExercise();
  }

  loadExercise(): void {
    this.fileService.loadExercise(this.exerciseId!).subscribe((response) => {
      this.exercise = response.data;
      this.loading = false;
    });
  }

  navigateBack(): void {
    this.router.navigateByUrl('/analyze', {
      state: { exerciseType: this.exercise?.type },
    });
  }

  deleteExerciseFile(fileId: string): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      data: {
        title: 'Deleting file',
        message: "Do you really want to delete this file? Can't recover later!",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fileService
          .deleteExerciseFile(this.exerciseId!, fileId)
          .subscribe(() => this.loadExercise());
      }
    });
  }

  protected addExerciseFile(): void {
    const dialogRef = this.dialog.open(UploadComponent, {
      disableClose: true,
      data: { exerciseType: this.exercise?.type },
    });

    dialogRef.afterClosed().subscribe((result: VideoUpload) => {
      if (result) {
        const gifBlob = dataURItoBlob(result.video);
        const file = new File([gifBlob], `${result.view}.gif`, {
          type: 'application/gif',
        });
        this.fileService
          .addExerciseFile(this.exerciseId!, file, {
            points: result.points,
            view: result.view,
          })
          .subscribe(() => this.loadExercise());
      }
    });
  }

  protected openExercise(): void {
    window.open(`/exercise/${this.exercise?.type}`, '_blank');
  }
}
