import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercise } from 'src/app/interface/exercise';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-analyze-exercise',
  templateUrl: './analyze-exercise.component.html',
  styleUrls: ['./analyze-exercise.component.scss'],
})
export class AnalyzeExerciseComponent implements OnInit {
  fileId: string | null;
  exercise?: Exercise;

  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fileService: FileService
  ) {
    this.fileId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.fileService.loadFile(this.fileId!).subscribe((response) => {
      this.exercise = response.data;
      this.loading = false;
    });
  }

  navigateBack(): void {
    this.router.navigateByUrl('/analyze');
  }
}
