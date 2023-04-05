import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exercise, ExerciseFile } from 'src/app/interface/exercise';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-analyze-exercise',
  templateUrl: './analyze-exercise.component.html',
  styleUrls: ['./analyze-exercise.component.scss'],
})
export class AnalyzeExerciseComponent implements OnInit {
  fileId: string | null;
  exercise?: Exercise;

  constructor(private route: ActivatedRoute, private fileService: FileService) {
    this.fileId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.fileService.loadFile(this.fileId!).subscribe((response) => {
      this.exercise = response.data;
    });
  }
}
