import { NgModule } from '@angular/core';
import { CarouselComponent } from './carousel.component';
import { CarouselCardComponent } from './carousel-card/carousel-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CarouselComponent, CarouselCardComponent],
  imports: [CommonModule, FormsModule],
  exports: [CarouselComponent],
})
export class CarouselModule {}
