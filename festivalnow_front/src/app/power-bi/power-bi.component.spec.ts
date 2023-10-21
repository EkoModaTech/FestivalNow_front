import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerBIComponent } from './power-bi.component';

describe('PowerBIComponent', () => {
  let component: PowerBIComponent;
  let fixture: ComponentFixture<PowerBIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PowerBIComponent]
    });
    fixture = TestBed.createComponent(PowerBIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
