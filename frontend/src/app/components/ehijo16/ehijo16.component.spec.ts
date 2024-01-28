import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ehijo16Component } from './ehijo16.component';

describe('Ehijo16Component', () => {
  let component: Ehijo16Component;
  let fixture: ComponentFixture<Ehijo16Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ehijo16Component]
    });
    fixture = TestBed.createComponent(Ehijo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
