import { Component, Input } from '@angular/core';
import { Doc } from '../analyze.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() doc?: Doc;

  entered: boolean = false;
}
