import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E14hijoComponent } from './e14hijo.component';

describe('E14hijoComponent', () => {
  let component: E14hijoComponent;
  let fixture: ComponentFixture<E14hijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [E14hijoComponent]
    });
    fixture = TestBed.createComponent(E14hijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
