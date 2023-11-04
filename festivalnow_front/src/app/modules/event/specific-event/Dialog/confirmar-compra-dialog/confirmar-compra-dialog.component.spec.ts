import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarCompraDialogComponent } from './confirmar-compra-dialog.component';

describe('ConfirmarCompraDialogComponent', () => {
  let component: ConfirmarCompraDialogComponent;
  let fixture: ComponentFixture<ConfirmarCompraDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmarCompraDialogComponent]
    });
    fixture = TestBed.createComponent(ConfirmarCompraDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
