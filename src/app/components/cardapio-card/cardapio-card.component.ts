import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardapio-card',
  standalone: true,
  imports: [],
  templateUrl: './cardapio-card.component.html',
  styleUrl: './cardapio-card.component.scss'
})
export class CardapioCardComponent {

  @Input() imageSrc: string='';
  @Input() imageAlt: string='';
  @Input() name: string='';
  @Input() price: number=0;
}
