import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CHijoComponent } from './chijo.component';

describe('CHijoComponent', () => {
  let component: CHijoComponent;
  let fixture: ComponentFixture<CHijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CHijoComponent]
    });
    fixture = TestBed.createComponent(CHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
