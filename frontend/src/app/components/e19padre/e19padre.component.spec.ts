import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E19padreComponent } from './e19padre.component';

describe('E19padreComponent', () => {
  let component: E19padreComponent;
  let fixture: ComponentFixture<E19padreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [E19padreComponent]
    });
    fixture = TestBed.createComponent(E19padreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
