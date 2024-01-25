import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio8padreComponent } from './ejercicio8padre.component';

describe('Ejercicio8padreComponent', () => {
  let component: Ejercicio8padreComponent;
  let fixture: ComponentFixture<Ejercicio8padreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ejercicio8padreComponent]
    });
    fixture = TestBed.createComponent(Ejercicio8padreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
