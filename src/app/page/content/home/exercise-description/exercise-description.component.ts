import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciseType } from 'src/app/interface/exercise';
import { ExerciseInfo, exerciseInfo } from 'src/assets/exercise-description';

@Component({
  selector: 'app-exercise-description',
  templateUrl: './exercise-description.component.html',
  styleUrls: ['./exercise-description.component.scss'],
})
export class ExerciseDescriptionComponent {
  exerciseType: string | null;
  exerciseTypeEnum = ExerciseType;

  info: ExerciseInfo;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.exerciseType = this.route.snapshot.paramMap.get('exerciseType');

    this.info = exerciseInfo[this.exerciseType!];
  }

  navigateBack(): void {
    this.router.navigateByUrl('/');
  }
}
