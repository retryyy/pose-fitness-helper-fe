import { Component } from '@angular/core';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {
  url?: string;
  file?: File;

  constructor(private fileService: FileService) {}

  onSelectFile(event: any) {
    const f: File = event.target.files && event.target.files[0];
    this.file = f;
    if (f) {
      var reader = new FileReader();
      reader.readAsDataURL(f);
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result as string;
      };
    }
  }

  uploadFile() {
    this.fileService.uploadFile(this.file!).subscribe();
  }
}
