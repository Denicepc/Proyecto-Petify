import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnewEj5Component } from './cnew-ej5.component';

describe('CnewEj5Component', () => {
  let component: CnewEj5Component;
  let fixture: ComponentFixture<CnewEj5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CnewEj5Component]
    });
    fixture = TestBed.createComponent(CnewEj5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
