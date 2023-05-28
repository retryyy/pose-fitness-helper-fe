import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatStepper } from '@angular/material/stepper';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';
import { map } from 'rxjs';
import { ConfigService } from 'src/app/service/config.service';
import { FileService } from 'src/app/service/file.service';

export interface VideoUpload {
  view: string;
  video: string;
  points: {};
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  @ViewChild('stepper') private myStepper?: MatStepper;

  loading: boolean = false;

  url?: string;
  file?: File;

  duration?: number;
  currentTime?: number;

  start: number = 0;
  end?: number;

  trimmedVideo?: string;
  points?: {};

  direction?: string;

  sides?: string[];

  constructor(
    private fileService: FileService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<UploadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.configService.exercises$
        .pipe(map((res) => res[this.data.exerciseType]))
        .subscribe((sides) => (this.sides = sides));
    }
  }

  onSelect(event: NgxDropzoneChangeEvent): void {
    if (event.addedFiles.length) {
      this.loading = true;
      this.file = event.addedFiles[0];

      if (this.file) {
        var reader = new FileReader();
        reader.readAsDataURL(this.file);
        reader.onload = (event) => {
          this.url = (<FileReader>event.target).result as string;
        };
      }
    } else {
      this._snackBar.open(
        'Maximum a 30MB MP4 video is accepted to be uploaded!'
      );
    }
  }

  trimFile(): void {
    if (this.file) {
      this.loading = true;
      this.fileService.trimFile(this.file, this.start, this.end!).subscribe({
        next: (res) => {
          this.trimmedVideo = res.data.movement;
          this.points = res.data.points;
          this.myStepper?.next();
          this.loading = false;
        },
        error: (err) => {
          // TODO
          this.loading = false;
          console.log(err);
          this._snackBar.open(err.error.message);
        },
      });
    }
  }

  removeFile(): void {
    this.file = undefined;
    this.trimmedVideo = undefined;
    this.points = undefined;
    this.url = undefined;
    this.myStepper?.reset();
  }

  setDuration(e: any): void {
    this.duration = Math.round(e.target.duration * 10) / 10;
    this.end = this.duration;
    this.start = 0;
    this.loading = false;
  }

  onTimeUpdate(e: any) {
    this.currentTime = Math.round(e.target.currentTime * 10) / 10;
  }

  close(): void {
    this.dialogRef.close();
  }

  loadVideo(): void {
    this.dialogRef.close({
      view: this.direction,
      video: this.trimmedVideo,
      points: this.points,
    } as VideoUpload);
  }

  downloadVideo(): void {
    this.dialogRef.close({
      points: this.points,
    });
  }
}
