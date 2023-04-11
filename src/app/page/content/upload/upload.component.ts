import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';
import { FileService } from 'src/app/service/file.service';

export interface VideoUpload {
  view: string;
  video: string;
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {
  @ViewChild('stepper') private myStepper?: MatStepper;

  loading: boolean = false;

  url?: string;
  file?: File;

  duration?: number;
  currentTime?: number;

  start: number = 0;
  end?: number;

  trimmedVideo?: string;

  direction?: string;

  constructor(
    private fileService: FileService,
    public dialogRef: MatDialogRef<UploadComponent>
  ) {}

  onSelect(event: NgxDropzoneChangeEvent): void {
    this.loading = true;
    this.file = event.addedFiles[0];

    if (this.file) {
      var reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result as string;
      };
    }
  }

  trimFile(): void {
    if (this.file) {
      this.loading = true;
      this.fileService.trimFile(this.file, this.start, this.end!).subscribe({
        next: (res) => {
          this.trimmedVideo = res.data;
          this.myStepper?.next();
          this.loading = false;
        },
        error: (err) => {
          // TODO
          this.loading = false;
          console.log(err);
        },
      });
    }
  }

  removeFile(): void {
    this.file = undefined;
    this.trimmedVideo = undefined;
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
    } as VideoUpload);
  }
}
