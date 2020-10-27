import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincrouselComponent } from './maincrousel.component';

describe('MaincrouselComponent', () => {
  let component: MaincrouselComponent;
  let fixture: ComponentFixture<MaincrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaincrouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaincrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
