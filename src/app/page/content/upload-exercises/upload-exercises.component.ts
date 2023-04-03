import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UploadComponent } from '../upload/upload.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileService } from 'src/app/service/file.service';

interface ExerciseSelect {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-upload-exercises',
  templateUrl: './upload-exercises.component.html',
  styleUrls: ['./upload-exercises.component.scss'],
})
export class UploadExercisesComponent {
  exerciseForm: FormGroup;

  files: string[] = [];
  thumbnailIndex: number = 0;

  exercises: ExerciseSelect[] = [
    { value: 'BENCH_PRESS', viewValue: 'Bench press' },
    { value: 'SQUAT', viewValue: 'Squat' },
    { value: 'SKULL_CRUSH', viewValue: 'Skull crush' },
  ];

  constructor(
    private fileService: FileService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    this.exerciseForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      type: ['', Validators.required],
    });
  }

  protected openUpload(): void {
    const dialogRef = this.dialog.open(UploadComponent);

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        this.files.push(result);
      }
    });
  }

  deleteGif(index: number): void {
    this.files.splice(index, 1);
    this.thumbnailIndex = 0;
  }

  setThumbnail(index: number): void {
    this.thumbnailIndex = index;
  }

  uploadFile(): void {
    this.exerciseForm.markAllAsTouched();

    if (this.exerciseForm.valid && this.files.length) {
      const gifBlobs = this.files.map((file) => {
        const gifBlob = this.dataURItoBlob(file);
        return new File([gifBlob], 'lel.gif', {
          type: 'application/gif',
        });
      });

      this.fileService
        .uploadFiles(gifBlobs, {
          name: this.exerciseForm.get('name')?.value,
          type: this.exerciseForm.get('type')?.value,
          thumbnailIndex: this.thumbnailIndex,
        })
        .subscribe({
          next: () => {
            this._snackBar.open('Files were uploaded and analyzed!');
            this.exerciseForm.reset();
          },
          error: () => this._snackBar.open('Something went wrong!'),
        });
    }
  }

  private dataURItoBlob(dataURI: string): Blob {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    return new Blob([int8Array], { type: 'image/gif' });
  }
}
