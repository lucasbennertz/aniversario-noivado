import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() imageUrl = '';
  @Input() title = '';
  @Input() text = '';
  flipped = false;

  toggleFlip() {
    this.flipped = !this.flipped;
  }
}
