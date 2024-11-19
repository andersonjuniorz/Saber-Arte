import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

interface CarouselImages {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})

export class CarouselComponent implements OnInit {
  
  @Input() images: CarouselImages[] = []
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = true;
  @Input() slideInterval = 3000; //default 3s

  selectedIndex = 0;

  //Icons
  faArrowCircleLeft = faArrowCircleLeft;
  faArrowCircleRight = faArrowCircleRight;


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.autoSlide) {
        this.autoSlideImages();
      }
    }
  }

  //Muda slide a cada 3s
  autoSlideImages():void{
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }  

  //mudar imagem ao clicar nos dots
  selectedImage(index:number):void{
    if(isPlatformBrowser(this.platformId)){
      this.selectedIndex = index; 
    }
  }

  //Buttons
  onPrevClick(): void {
    if(isPlatformBrowser(this.platformId)){

      if(this.selectedIndex === 0){
        this.selectedIndex = this.images.length - 1 ;
      }else{
        this.selectedIndex--;
      }

    }
  }

  onNextClick(): void{
    if(isPlatformBrowser(this.platformId)){
      if(this.selectedIndex === this.images.length - 1){
        this.selectedIndex = 0;
      
      }else{
        this.selectedIndex++;
      }
    }
  }

}
