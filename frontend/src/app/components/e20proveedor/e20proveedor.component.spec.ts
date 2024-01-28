import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E20proveedorComponent } from './e20proveedor.component';

describe('E20proveedorComponent', () => {
  let component: E20proveedorComponent;
  let fixture: ComponentFixture<E20proveedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [E20proveedorComponent]
    });
    fixture = TestBed.createComponent(E20proveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
