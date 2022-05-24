import { Component, Input, OnInit } from '@angular/core';
import { CarouselItem } from '../carousel-item';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.scss'],
})
export class CarouselCardComponent implements OnInit {
  @Input() item?: CarouselItem;
  @Input() selected?: boolean;
  constructor() {}

  ngOnInit(): void {}
}
