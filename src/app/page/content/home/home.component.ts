import { Component } from '@angular/core';
import { ExerciseType } from 'src/app/interface/exercise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  exerciseType = ExerciseType;
}
