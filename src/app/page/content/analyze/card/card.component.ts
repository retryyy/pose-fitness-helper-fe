import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Doc } from '../analyze.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() doc?: Doc;
  @Output() deleteDoc = new EventEmitter<string>();

  entered: boolean = false;

  deleteFile(): void {
    this.deleteDoc.emit(this.doc?.file_id);
  }
}
