import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Epadre17Component } from './epadre17.component';

describe('Epadre17Component', () => {
  let component: Epadre17Component;
  let fixture: ComponentFixture<Epadre17Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Epadre17Component]
    });
    fixture = TestBed.createComponent(Epadre17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
