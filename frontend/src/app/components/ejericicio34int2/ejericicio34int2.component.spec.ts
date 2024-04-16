import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejericicio34int2Component } from './ejericicio34int2.component';

describe('Ejericicio34int2Component', () => {
  let component: Ejericicio34int2Component;
  let fixture: ComponentFixture<Ejericicio34int2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ejericicio34int2Component]
    });
    fixture = TestBed.createComponent(Ejericicio34int2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
