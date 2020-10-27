import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcrouselComponent } from './cardcrousel.component';

describe('CardcrouselComponent', () => {
  let component: CardcrouselComponent;
  let fixture: ComponentFixture<CardcrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardcrouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardcrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
