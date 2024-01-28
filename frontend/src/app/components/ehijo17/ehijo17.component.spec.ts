import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ehijo17Component } from './ehijo17.component';

describe('Ehijo17Component', () => {
  let component: Ehijo17Component;
  let fixture: ComponentFixture<Ehijo17Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ehijo17Component]
    });
    fixture = TestBed.createComponent(Ehijo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
