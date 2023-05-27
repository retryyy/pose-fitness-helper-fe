import { Component, EventEmitter, Output } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-choose-type',
  templateUrl: './choose-type.component.html',
  styleUrls: ['./choose-type.component.scss'],
})
export class ChooseTypeComponent {
  @Output() exerciseChange = new EventEmitter<string>();

  constructor(protected configService: ConfigService) {}

  setType(exerciseType: string): void {
    this.exerciseChange.emit(exerciseType);
  }
}
