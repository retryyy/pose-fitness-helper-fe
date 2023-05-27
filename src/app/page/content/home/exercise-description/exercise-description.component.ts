import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ExerciseInfo,
  ExercisesInfo,
} from 'src/app/interface/exercise-description';
import * as _exerciseInfo from 'src/assets/exercise-description.json';

@Component({
  selector: 'app-exercise-description',
  templateUrl: './exercise-description.component.html',
  styleUrls: ['./exercise-description.component.scss'],
})
export class ExerciseDescriptionComponent {
  exerciseType: string | null;

  info: ExerciseInfo;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.exerciseType = this.route.snapshot.paramMap.get('exerciseType');

    let exerciseInfo = _exerciseInfo as ExercisesInfo;
    this.info = exerciseInfo[this.exerciseType!];
  }

  navigateBack(): void {
    this.router.navigateByUrl('/');
  }
}
