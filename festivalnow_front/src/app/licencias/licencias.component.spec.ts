import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenciasComponent } from './licencias.component';

describe('LicenciasComponent', () => {
  let component: LicenciasComponent;
  let fixture: ComponentFixture<LicenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LicenciasComponent]
    });
    fixture = TestBed.createComponent(LicenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
