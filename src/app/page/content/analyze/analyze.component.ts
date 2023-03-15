import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/service/file.service';

interface Doc {
  file: string;
  skeleton: object;
}

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.scss'],
})
export class AnalyzeComponent implements OnInit {
  docs?: Doc[];

  constructor(private fileService: FileService) {}

  ngOnInit(): void {
    this.fileService.loadFiles().subscribe((response) => {
      this.docs = response.data;
      console.log(this.docs);
    });
  }
}
