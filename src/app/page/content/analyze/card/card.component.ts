import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseThumbnail } from 'src/app/interface/exercise';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() exercise?: ExerciseThumbnail;
  @Output() deleteDoc = new EventEmitter<string>();

  entered: boolean = false;

  constructor(private router: Router) {}

  deleteFile(): void {
    this.deleteDoc.emit(this.exercise?.id);
  }

  openFile(): void {
    this.router.navigateByUrl(`/analysis/${this.exercise?.id}`);
  }
}
