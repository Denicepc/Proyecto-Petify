import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasSistemaComponent } from './compras-sistema.component';

describe('ComprasSistemaComponent', () => {
  let component: ComprasSistemaComponent;
  let fixture: ComponentFixture<ComprasSistemaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComprasSistemaComponent]
    });
    fixture = TestBed.createComponent(ComprasSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
