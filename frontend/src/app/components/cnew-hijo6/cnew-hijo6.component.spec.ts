import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CNewHijo6Component } from './cnew-hijo6.component';

describe('CNewHijo6Component', () => {
  let component: CNewHijo6Component;
  let fixture: ComponentFixture<CNewHijo6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CNewHijo6Component]
    });
    fixture = TestBed.createComponent(CNewHijo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
