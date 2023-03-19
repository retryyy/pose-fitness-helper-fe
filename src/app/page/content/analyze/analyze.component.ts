import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/service/file.service';

interface Doc {
  file_id: string;
  thumbnail: string;
}

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.scss'],
})
export class AnalyzeComponent implements OnInit {
  docs?: Doc[];
  data?: string;

  constructor(private fileService: FileService) {}

  ngOnInit(): void {
    this.fileService.loadFiles().subscribe((response) => {
      this.docs = response.data;
    });
  }

  loadUpload(fileId: string): void {
    this.fileService.loadFile(fileId).subscribe((response) => {
      this.data = response.data;
    });
  }
}
