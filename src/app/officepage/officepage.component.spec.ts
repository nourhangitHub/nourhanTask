import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficepageComponent } from './officepage.component';

describe('OfficepageComponent', () => {
  let component: OfficepageComponent;
  let fixture: ComponentFixture<OfficepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
