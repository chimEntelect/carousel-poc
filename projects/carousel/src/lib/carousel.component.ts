import { Component, Input, OnInit } from '@angular/core';
import { CarouselItem } from './carousel-item';

@Component({
  selector: 'lib-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() items: CarouselItem[] = [];
  @Input() isDarkMode = false;
  @Input() caption = '';

  sortedItems: CarouselItem[] = [];
  selectedIndex?: number;
  selectedItem?: CarouselItem;
  view: 'desktop' | 'tablet' = 'desktop';

  private query: MediaQueryList;
  private desktopCards = 5;
  private tabletCards = 3;

  constructor() {
    this.query = window.matchMedia('(max-width: 991px)');
    this.onMediaChange();
    this.query.addEventListener('change', this.onMediaChange);
  }

  ngOnInit(): void {
    this.spotlightItem(1);
  }

  onMediaChange = () => {
    this.view = this.query.matches ? 'tablet' : 'desktop';
    this.spotlightItem(this.selectedIndex || 0);
  };

  itemVisible(displayIndex: number) {
    return displayIndex < this.getNumberOfCardsToDisplay();
  }

  spotlightItem(index: number) {
    this.selectedIndex = (this.items.length + index) % this.items.length;

    this.selectedItem = this.items[this.selectedIndex];
    const midpointIndex = Math.floor(this.getNumberOfCardsToDisplay() / 2);
    const startIndex =
      (this.selectedIndex + this.items.length - midpointIndex) %
      this.items.length;
    this.sortedItems = [];
    for (let i = 0; i < this.items.length; i++) {
      this.sortedItems.push(this.items[(i + startIndex) % this.items.length]);
    }
  }

  back() {
    this.spotlightItem((this.selectedIndex || 0) - 1);
  }

  next() {
    this.spotlightItem((this.selectedIndex || 0) + 1);
  }

  ngOnDestroy() {
    this.query.removeEventListener('change', this.onMediaChange);
  }

  private getNumberOfCardsToDisplay() {
    return this.view === 'desktop' ? this.desktopCards : this.tabletCards;
  }
}
