import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CardapioCardComponent } from '../cardapio-card/cardapio-card.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { MatGridListModule } from '@angular/material/grid-list';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  imageSrc: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatGridListModule,
    CommonModule,
    HeaderComponent, 
    FooterComponent, 
    CardapioCardComponent, 
    GalleryComponent
  ],
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

  GalleryImages: Tile[] = [
    { imageSrc: '/Gallery1.png',  cols: 3, rows: 1, color: '#d9d9d9'  },
    { imageSrc: '/Gallery2.png',  cols: 1, rows: 2, color: '#d9d9d9'  },
    { imageSrc: '/Gallery3.png',  cols: 1, rows: 1, color: '#d9d9d9'  },
    { imageSrc: '/Gallery4.png',  cols: 2, rows: 1, color: '#d9d9d9'  },
    { imageSrc: '/Gallery5.png',  cols: 1, rows: 2, color: '#d9d9d9'  },
    { imageSrc: '/Gallery6.png',  cols: 1, rows: 1, color: '#d9d9d9'  },
    { imageSrc: '/Gallery7.png',  cols: 2, rows: 1, color: '#d9d9d9'  },
    { imageSrc: '/Gallery8.png',  cols: 2, rows: 1, color: '#d9d9d9'  },
  ];
}