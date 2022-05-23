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
  ];
  constructor() {}

  ngOnInit(): void {}
}
