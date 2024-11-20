import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu'; 
import { MatButtonModule } from '@angular/material/button';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule, 
    MatMenuModule, 
    MatButtonModule, 
    CarouselComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  images = [
    { imageSrc: '/BannerSlide1.png', imageAlt: 'Prato 1', width: 1200, height: 800 },
    { imageSrc: '/BannerSlide2.png', imageAlt: 'Prato 2', width: 1200, height: 800 },
    { imageSrc: '/BannerSlide3.png', imageAlt: 'Sushi',   width: 1200, height: 800 },
  ];
}
