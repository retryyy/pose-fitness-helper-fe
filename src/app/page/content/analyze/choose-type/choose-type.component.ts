import { Component, EventEmitter, Output } from '@angular/core';
import { ExerciseType } from 'src/app/interface/exercise';

@Component({
  selector: 'app-choose-type',
  templateUrl: './choose-type.component.html',
  styleUrls: ['./choose-type.component.scss'],
})
export class ChooseTypeComponent {
  @Output() exerciseChange = new EventEmitter<string>();
  exerciseType = ExerciseType;

  setType(exerciseType: string): void {
    this.exerciseChange.emit(exerciseType);
  }
}
