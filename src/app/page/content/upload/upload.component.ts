import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatStepper } from '@angular/material/stepper';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';
import { FileService } from 'src/app/service/file.service';

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

  exerciseForm: FormGroup;

  constructor(
    private fileService: FileService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.exerciseForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      type: ['', Validators.required],
    });
  }

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
      this.fileService
        .trimFile(this.file, this.start, this.end!)
        .subscribe((res) => {
          this.trimmedVideo = res.data;
          this.myStepper?.next();
          this.loading = false;
        });
    }
  }

  uploadFile(): void {
    this.exerciseForm.markAllAsTouched();
    console.log(this.exerciseForm.valid);
    console.log(this.exerciseForm);

    if (this.trimmedVideo && this.exerciseForm.valid) {
      const gifBlob = this.dataURItoBlob(this.trimmedVideo);
      const fileToUpload = new File([gifBlob], 'lel.gif', {
        type: 'application/gif',
      });
      this.fileService
        .uploadFile(fileToUpload, this.exerciseForm.value)
        .subscribe(() => {
          this._snackBar.open('File was uploaded and analyzed!');
          this.removeFile();
          this.exerciseForm.reset();
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
