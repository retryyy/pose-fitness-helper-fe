import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';
import { ExercisesInfo } from 'src/app/interface/exercise-description';
import * as _exerciseInfo from 'src/assets/exercise-description.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  info: ExercisesInfo;

  constructor(private router: Router, protected configService: ConfigService) {
    let exerciseInfo = _exerciseInfo as ExercisesInfo;
    this.info = exerciseInfo;
  }

  learnMore(exercise: string): void {
    this.router.navigateByUrl(`/exercise/${exercise}`);
  }
}
