import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CNewPadre6Component } from './cnew-padre6.component';

describe('CNewPadre6Component', () => {
  let component: CNewPadre6Component;
  let fixture: ComponentFixture<CNewPadre6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CNewPadre6Component]
    });
    fixture = TestBed.createComponent(CNewPadre6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
