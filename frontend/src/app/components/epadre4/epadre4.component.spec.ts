import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Epadre4Component } from './epadre4.component';

describe('Epadre4Component', () => {
  let component: Epadre4Component;
  let fixture: ComponentFixture<Epadre4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Epadre4Component]
    });
    fixture = TestBed.createComponent(Epadre4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
