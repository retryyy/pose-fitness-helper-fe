import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseType } from 'src/app/interface/exercise';
import { ExercisesInfo, exerciseInfo } from 'src/assets/exercise-description';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  exerciseType = ExerciseType;
  info: ExercisesInfo;

  constructor(private router: Router) {
    this.info = exerciseInfo;
  }

  learnMore(exercise: string): void {
    this.router.navigateByUrl(`/exercise/${exercise}`);
  }
}
