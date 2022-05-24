import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not break when items count is zero', () => {
    component.items = [];
    expect(component).toBeTruthy();
  });

  it('should be able to show the 1 item if that is all in the list', () => {
    const item = {
      title: 'Home internet',
      cta: { text: 'start here', href: '#' },
    };
    component.items = [item];
    component.spotlightItem(0); // this updates the carousel

    expect(component.sortedItems).toHaveSize(1);
    expect(component.selectedItem).toEqual(item);
  });

  it('should be able to show the 3 items, for tablet, selecting the first item in the middle.', () => {
    const items = [
      { title: 'Mobile internet', cta: { text: 'start here', href: '#' } },
      { title: 'Home internet', cta: { text: 'start here', href: '#' } },
      { title: 'Work internet', cta: { text: 'start here', href: '#' } },
    ];
    component.items = items;
    component.view = 'tablet';
    component.spotlightItem(0); // this updates the carousel

    expect(component.sortedItems).toHaveSize(3);
    expect(component.selectedItem).toEqual(items[0]);
  });

  describe('for the back button', () => {
    const items = [
      { title: 'Mobile internet', cta: { text: 'start here', href: '#' } },
      { title: 'Home internet', cta: { text: 'start here', href: '#' } },
      { title: 'Work internet', cta: { text: 'start here', href: '#' } },
    ];

    it('should go to the end of the list when the selected item is at index 0', () => {
      component.items = items;
      component.view = 'tablet';
      component.spotlightItem(0); // this updates the carousel
      component.back();

      expect(component.sortedItems).toHaveSize(3);
      expect(component.selectedItem).toEqual(items[2]);
    });
  });

  describe('when spotlighting', () => {
    const items = [
      { title: 'Mobile internet', cta: { text: 'start here', href: '#' } },
      { title: 'Home internet', cta: { text: 'start here', href: '#' } },
      { title: 'Work internet', cta: { text: 'start here', href: '#' } },
      { title: 'Get a device', cta: { text: 'get here', href: '#' } },
      { title: 'Set a device', cta: { text: 'set here', href: '#' } },
      { title: 'Add a phone-line', cta: { text: 'add here', href: '#' } },
      { title: 'Upgrade', cta: { text: 'up here', href: '#' } },
      { title: 'Downgrade', cta: { text: 'down here', href: '#' } },
    ];

    it('and at index 0 - for tablet, it should show item 0 in the middle.', () => {
      component.items = items;
      component.view = 'tablet';
      component.spotlightItem(0); // this updates the carousel

      expect(component.sortedItems).toHaveSize(8);
      expect(component.sortedItems[0]).toEqual(items[7]);
      expect(component.sortedItems[1]).toEqual(items[0]);
      expect(component.sortedItems[2]).toEqual(items[1]);
    });

    it('and at index [items.length - 1] - for tablet, it should show item [length - 1] in the middle.', () => {
      component.items = items;
      component.view = 'tablet';
      component.spotlightItem(7); // this updates the carousel

      expect(component.sortedItems).toHaveSize(8);
      expect(component.sortedItems[0]).toEqual(items[6]);
      expect(component.sortedItems[1]).toEqual(items[7]);
      expect(component.sortedItems[2]).toEqual(items[0]);
    });
  });

  describe('for the next button', () => {
    const items = [
      { title: 'Mobile internet', cta: { text: 'start here', href: '#' } },
      { title: 'Home internet', cta: { text: 'start here', href: '#' } },
      { title: 'Work internet', cta: { text: 'start here', href: '#' } },
    ];

    it('should go to the start of the list when the selected item is at index [length - 1]', () => {
      component.items = items;
      component.view = 'tablet';
      component.spotlightItem(2); // this updates the carousel
      component.next();

      expect(component.sortedItems).toHaveSize(3);
      expect(component.selectedItem).toEqual(items[0]);
    });
  });
});
