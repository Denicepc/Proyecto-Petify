import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarComponentesComponent } from './mostrar-componentes.component';

describe('MostrarComponentesComponent', () => {
  let component: MostrarComponentesComponent;
  let fixture: ComponentFixture<MostrarComponentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarComponentesComponent]
    });
    fixture = TestBed.createComponent(MostrarComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
