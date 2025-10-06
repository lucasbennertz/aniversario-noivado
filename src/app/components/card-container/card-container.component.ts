import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-container',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.scss'
})
export class CardContainerComponent {

}
