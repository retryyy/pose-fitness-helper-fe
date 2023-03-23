import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-analyze-exercise',
  templateUrl: './analyze-exercise.component.html',
  styleUrls: ['./analyze-exercise.component.scss'],
})
export class AnalyzeExerciseComponent implements OnInit {
  file_id: string | null;
  movement?: string;

  constructor(private route: ActivatedRoute, private fileService: FileService) {
    this.file_id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.fileService.loadFile(this.file_id!).subscribe((response) => {
      this.movement = response.data;
    });
  }
}
