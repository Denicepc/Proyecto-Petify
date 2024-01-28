import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E10padreComponent } from './e10padre.component';

describe('E10padreComponent', () => {
  let component: E10padreComponent;
  let fixture: ComponentFixture<E10padreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [E10padreComponent]
    });
    fixture = TestBed.createComponent(E10padreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
