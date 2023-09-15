import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PseComponent } from './pse.component';

describe('PseComponent', () => {
  let component: PseComponent;
  let fixture: ComponentFixture<PseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PseComponent]
    });
    fixture = TestBed.createComponent(PseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
