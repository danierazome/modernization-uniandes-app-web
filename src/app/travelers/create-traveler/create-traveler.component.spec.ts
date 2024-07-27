import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTravelerComponent } from './create-traveler.component';

describe('CreateTravelerComponent', () => {
  let component: CreateTravelerComponent;
  let fixture: ComponentFixture<CreateTravelerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTravelerComponent]
    });
    fixture = TestBed.createComponent(CreateTravelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
