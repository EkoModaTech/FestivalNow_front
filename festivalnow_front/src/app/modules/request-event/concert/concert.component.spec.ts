import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertComponent } from './concert.component';

describe('ConcertComponent', () => {
  let component: ConcertComponent;
  let fixture: ComponentFixture<ConcertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConcertComponent]
    });
    fixture = TestBed.createComponent(ConcertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
