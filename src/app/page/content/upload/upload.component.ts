import { Component } from '@angular/core';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {
  url?: string;
  file?: File;
  duration?: number;

  constructor(private fileService: FileService) {}

  onSelect(event: NgxDropzoneChangeEvent) {
    this.file = event.addedFiles[0];

    if (this.file) {
      var reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result as string;
      };
    }
  }

  uploadFile() {
    this.fileService.uploadFile(this.file!).subscribe();
  }

  setDuration(e: any) {
    console.log(e.target);
    this.duration = Math.round(e?.target?.duration);
  }

  formatLabel(value: number): string {
    return `${value}`;
  }
}
