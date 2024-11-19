import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CardapioCardComponent } from '../cardapio-card/cardapio-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CardapioCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  cardapioImages = [
    { imageSrc: '/cardapioCardImg1.png', imageAlt: 'pratos', name: 'SUSHI',             price: 100  },
    { imageSrc: '/cardapioCardImg2.png', imageAlt: 'pratos', name: 'CHURRASCO',         price: 200  },
    { imageSrc: '/cardapioCardImg3.png', imageAlt: 'pratos', name: 'LA GOURMER',        price: 230  },
    { imageSrc: '/cardapioCardImg4.png', imageAlt: 'pratos', name: 'SOBREMESA',         price: 150  },
    { imageSrc: '/cardapioCardImg5.png', imageAlt: 'pratos', name: 'LA GOURMER MASTER', price: 100  },
    { imageSrc: '/cardapioCardImg6.png', imageAlt: 'pratos', name: 'PIZZA',             price: 55   },
  ];
}