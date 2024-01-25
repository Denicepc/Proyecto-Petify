import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio8hijoComponent } from './ejercicio8hijo.component';

describe('Ejercicio8hijoComponent', () => {
  let component: Ejercicio8hijoComponent;
  let fixture: ComponentFixture<Ejercicio8hijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ejercicio8hijoComponent]
    });
    fixture = TestBed.createComponent(Ejercicio8hijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
