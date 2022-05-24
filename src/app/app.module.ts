import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselCardComponent } from './carousel-card/carousel-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CarouselComponent, CarouselCardComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
