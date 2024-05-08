import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPadreComponent } from './cpadre.component';

describe('CPadreComponent', () => {
  let component: CPadreComponent;
  let fixture: ComponentFixture<CPadreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CPadreComponent]
    });
    fixture = TestBed.createComponent(CPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
