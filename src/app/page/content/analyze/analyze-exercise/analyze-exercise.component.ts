import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileService } from 'src/app/service/file.service';
import { Exercise, ExerciseFile } from '../analyze.component';

@Component({
  selector: 'app-analyze-exercise',
  templateUrl: './analyze-exercise.component.html',
  styleUrls: ['./analyze-exercise.component.scss'],
})
export class AnalyzeExerciseComponent implements OnInit {
  fileId: string | null;
  movements?: ExerciseFile[];
  movementName?: string;
  movementType?: string;

  constructor(private route: ActivatedRoute, private fileService: FileService) {
    this.fileId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.fileService.loadFile(this.fileId!).subscribe((response) => {
      const exerciseData: Exercise = response.data;

      this.movements = exerciseData.files;
      this.movementName = exerciseData.name;
      this.movementType = exerciseData.type;
    });
  }
}
