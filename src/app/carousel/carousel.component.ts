import { Component, OnInit } from '@angular/core';
import { CarouselItem } from '../carousel-item';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  items: CarouselItem[] = [
    { title: 'Mobile internet', cta: { text: 'start here', href: '#' } },
    { title: 'Home internet', cta: { text: 'start here', href: '#' } },
    { title: 'Get a device', cta: { text: 'start here', href: '#' } },
    { title: 'Add a phone-line', cta: { text: 'start here', href: '#' } },
    { title: 'Upgrade', cta: { text: 'start here', href: '#' } },
    { title: 'Downgrade', cta: { text: 'start here', href: '#' } },
  ];

  sortedItems: CarouselItem[] = [];
  selectedIndex?: number;
  selectedItem?: CarouselItem;

  view: 'desktop' | 'tablet' = 'desktop';

  constructor() {}

  ngOnInit(): void {
    this.spotlightItem(1);
  }

  itemVisible(displayIndex: number) {
    return displayIndex < (this.view === 'desktop' ? 5 : 3);
  }

  spotlightItem(index: number) {
    this.selectedIndex =
      Math.abs(index < 0 ? this.items.length - 1 + index : index) %
      this.items.length;
    this.selectedItem = this.items[this.selectedIndex];
    const numVisibleCards = this.view === 'desktop' ? 5 : 3;
    const midpointIndex = Math.floor(numVisibleCards / 2);
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
}
