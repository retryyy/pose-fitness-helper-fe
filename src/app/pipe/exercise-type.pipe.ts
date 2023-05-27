import { Pipe, PipeTransform } from '@angular/core';
import * as _exerciseInfo from 'src/assets/exercise-description.json';
import { ExercisesInfo } from '../interface/exercise-description';

@Pipe({
  name: 'exerciseType',
})
export class ExerciseTypePipe implements PipeTransform {
  transform(value: string | undefined | null): string {
    let exerciseInfo = _exerciseInfo as ExercisesInfo;
    return exerciseInfo[value!].name;
  }
}
