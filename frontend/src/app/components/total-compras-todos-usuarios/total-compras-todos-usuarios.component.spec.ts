import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalComprasTodosUsuariosComponent } from './total-compras-todos-usuarios.component';

describe('TotalComprasTodosUsuariosComponent', () => {
  let component: TotalComprasTodosUsuariosComponent;
  let fixture: ComponentFixture<TotalComprasTodosUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalComprasTodosUsuariosComponent]
    });
    fixture = TestBed.createComponent(TotalComprasTodosUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
