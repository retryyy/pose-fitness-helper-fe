import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseThumbnail, ExerciseType } from 'src/app/interface/exercise';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() exercise?: ExerciseThumbnail;
  @Output() deleteDoc = new EventEmitter<string>();
  exerciseType = ExerciseType;

  entered: boolean = false;

  constructor(private router: Router) {}

  deleteFile(): void {
    this.deleteDoc.emit(this.exercise?.id);
  }

  openFile(): void {
    this.router.navigateByUrl(`/analyze/${this.exercise?.id}`);
  }
}
