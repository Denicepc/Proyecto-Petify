import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarUsuarioLoadoComponent } from './mostrar-usuario-loado.component';

describe('MostrarUsuarioLoadoComponent', () => {
  let component: MostrarUsuarioLoadoComponent;
  let fixture: ComponentFixture<MostrarUsuarioLoadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarUsuarioLoadoComponent]
    });
    fixture = TestBed.createComponent(MostrarUsuarioLoadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
