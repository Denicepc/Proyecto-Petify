import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjProductosComponent } from './ej-productos.component';

describe('EjProductosComponent', () => {
  let component: EjProductosComponent;
  let fixture: ComponentFixture<EjProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjProductosComponent]
    });
    fixture = TestBed.createComponent(EjProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
