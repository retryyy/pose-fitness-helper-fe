import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {}

  deleteFile(): void {
    this.deleteDoc.emit(this.doc?.file_id);
  }

  openFile(): void {
    this.router.navigateByUrl(`/analyze/${this.doc?.file_id}`, {
      state: { doc: this.doc },
    });
  }
}
