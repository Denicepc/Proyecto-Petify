import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E14padreComponent } from './e14padre.component';

describe('E14padreComponent', () => {
  let component: E14padreComponent;
  let fixture: ComponentFixture<E14padreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [E14padreComponent]
    });
    fixture = TestBed.createComponent(E14padreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
