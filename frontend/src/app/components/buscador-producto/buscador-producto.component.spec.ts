import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorProductoComponent } from './buscador-producto.component';

describe('BuscadorProductoComponent', () => {
  let component: BuscadorProductoComponent;
  let fixture: ComponentFixture<BuscadorProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscadorProductoComponent]
    });
    fixture = TestBed.createComponent(BuscadorProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
