import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E10hijoComponent } from './e10hijo.component';

describe('E10hijoComponent', () => {
  let component: E10hijoComponent;
  let fixture: ComponentFixture<E10hijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [E10hijoComponent]
    });
    fixture = TestBed.createComponent(E10hijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
