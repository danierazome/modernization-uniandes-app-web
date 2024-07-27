import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelersMainComponent } from './travelers-main.component';

describe('TravelersMainComponent', () => {
  let component: TravelersMainComponent;
  let fixture: ComponentFixture<TravelersMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelersMainComponent]
    });
    fixture = TestBed.createComponent(TravelersMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
