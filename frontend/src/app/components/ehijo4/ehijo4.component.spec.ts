import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ehijo4Component } from './ehijo4.component';

describe('Ehijo4Component', () => {
  let component: Ehijo4Component;
  let fixture: ComponentFixture<Ehijo4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ehijo4Component]
    });
    fixture = TestBed.createComponent(Ehijo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
