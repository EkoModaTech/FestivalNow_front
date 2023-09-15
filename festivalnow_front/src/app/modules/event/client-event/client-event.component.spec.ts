import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientEventComponent } from './client-event.component';

describe('ClientEventComponent', () => {
  let component: ClientEventComponent;
  let fixture: ComponentFixture<ClientEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientEventComponent]
    });
    fixture = TestBed.createComponent(ClientEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
