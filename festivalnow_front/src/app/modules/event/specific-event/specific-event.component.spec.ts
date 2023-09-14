import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificEventComponent } from './specific-event.component';

describe('SpecificEventComponent', () => {
  let component: SpecificEventComponent;
  let fixture: ComponentFixture<SpecificEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecificEventComponent]
    });
    fixture = TestBed.createComponent(SpecificEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
