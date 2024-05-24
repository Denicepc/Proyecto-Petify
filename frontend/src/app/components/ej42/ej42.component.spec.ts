import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej42Component } from './ej42.component';

describe('Ej42Component', () => {
  let component: Ej42Component;
  let fixture: ComponentFixture<Ej42Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ej42Component]
    });
    fixture = TestBed.createComponent(Ej42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
