import { Component, Input } from '@angular/core';
import { ExerciseType } from 'src/app/interface/exercise';

@Component({
  selector: 'app-exercise-type',
  templateUrl: './exercise-type.component.html',
  styleUrls: ['./exercise-type.component.scss'],
})
export class ExerciseTypeComponent {
  @Input() exerciseTypeString?: string;
  exerciseType = ExerciseType;
}
