import { Component } from '@angular/core';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {
  loading: boolean = false;

  url?: string;
  file?: File;
  duration?: number;

  start: number = 0;
  end?: number;

  durationText?: string;

  constructor(private fileService: FileService) {}

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
    this.fileService.trimFile(this.file!, this.start!, this.end!).subscribe();
  }

  uploadFile(): void {
    this.fileService.uploadFile(this.file!).subscribe();
  }

  removeFile(): void {
    this.file = undefined;
    this.url = undefined;
  }

  setDuration(e: any): void {
    this.duration = Math.round(e.target.duration * 10) / 10;
    this.end = this.duration;
    this.start = 0;
    this.loading = false;
  }

  formatLabel(value: number): string {
    return `${value}`;
  }
}
