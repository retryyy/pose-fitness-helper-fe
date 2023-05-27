import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UploadComponent, VideoUpload } from '../upload/upload.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileService } from 'src/app/service/file.service';
import { dataURItoBlob } from 'src/app/util/string-to-file';
import { ConfigService } from 'src/app/service/config.service';
import { PopupComponent } from 'src/app/common/popup/popup.component';

@Component({
  selector: 'app-upload-exercises',
  templateUrl: './upload-exercises.component.html',
  styleUrls: ['./upload-exercises.component.scss'],
})
export class UploadExercisesComponent {
  exerciseForm: FormGroup;

  uploads: VideoUpload[] = [];
  thumbnailIndex: number = 0;

  constructor(
    private fileService: FileService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    protected configService: ConfigService
  ) {
    this.exerciseForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      type: ['', Validators.required],
    });

    this.exerciseForm.get('type')?.valueChanges.subscribe(() => {
      this.uploads = [];
      this.setThumbnail(0);
    });
  }

  protected openUpload(): void {
    const exerciseType = this.exerciseForm.get('type')?.value;

    if (exerciseType) {
      const dialogRef = this.dialog.open(UploadComponent, {
        disableClose: true,
        data: { exerciseType },
      });

      dialogRef.afterClosed().subscribe((result: VideoUpload) => {
        if (result) {
          this.uploads.push(result);
        }
      });
    } else {
      this.dialog.open(PopupComponent, {
        data: {
          title: 'Information',
          message: 'Please choose an exercise type before uploading video!',
          noChoose: true,
        },
      });
    }
  }

  deleteGif(index: number): void {
    this.uploads.splice(index, 1);
    this.thumbnailIndex = 0;
  }

  setThumbnail(index: number): void {
    this.thumbnailIndex = index;
  }

  uploadFile(): void {
    this.exerciseForm.markAllAsTouched();

    if (this.exerciseForm.valid && this.uploads.length) {
      let points: object[] = [];
      const gifBlobs = this.uploads.map((upload) => {
        points.push(upload.points);
        const gifBlob = dataURItoBlob(upload.video);
        return new File([gifBlob], `${upload.view}.gif`, {
          type: 'application/gif',
        });
      });

      this.fileService
        .uploadFiles(gifBlobs, {
          name: this.exerciseForm.get('name')?.value,
          type: this.exerciseForm.get('type')?.value,
          points: points,
          thumbnailIndex: this.thumbnailIndex,
        })
        .subscribe({
          next: () => {
            this._snackBar.open('Files were uploaded and analyzed!');
            this.exerciseForm.reset();
            this.thumbnailIndex = 0;
            this.uploads = [];
          },
          error: (err) => this._snackBar.open(err.error.message),
        });
    }
  }
}
