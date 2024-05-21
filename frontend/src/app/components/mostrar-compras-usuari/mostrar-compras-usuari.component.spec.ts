import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarComprasUsuariComponent } from './mostrar-compras-usuari.component';

describe('MostrarComprasUsuariComponent', () => {
  let component: MostrarComprasUsuariComponent;
  let fixture: ComponentFixture<MostrarComprasUsuariComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarComprasUsuariComponent]
    });
    fixture = TestBed.createComponent(MostrarComprasUsuariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
