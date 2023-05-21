import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exercise-tooltip',
  templateUrl: './exercise-tooltip.component.html',
  styleUrls: ['./exercise-tooltip.component.scss'],
})
export class ExerciseTooltipComponent {
  @Input() exerciseType?: string;
}
