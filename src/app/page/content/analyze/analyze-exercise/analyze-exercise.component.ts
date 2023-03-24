import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-analyze-exercise',
  templateUrl: './analyze-exercise.component.html',
  styleUrls: ['./analyze-exercise.component.scss'],
})
export class AnalyzeExerciseComponent implements OnInit {
  fileId: string | null;
  movement?: string;
  movementName?: string;
  movementType?: string;

  constructor(private route: ActivatedRoute, private fileService: FileService) {
    this.fileId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.fileService.loadFile(this.fileId!).subscribe((response) => {
      this.movement = response.data.file;
      this.movementName = response.data.name;
      this.movementType = response.data.type;
    });
  }
}
