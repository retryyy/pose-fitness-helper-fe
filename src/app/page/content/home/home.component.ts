import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseType } from 'src/app/interface/exercise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  exerciseType = ExerciseType;

  constructor(private router: Router) {}

  learnMore(exercise: string): void {
    this.router.navigateByUrl(`/exercise/${exercise}`);
  }
}
