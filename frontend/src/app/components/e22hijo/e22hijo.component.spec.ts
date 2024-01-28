import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E22hijoComponent } from './e22hijo.component';

describe('E22hijoComponent', () => {
  let component: E22hijoComponent;
  let fixture: ComponentFixture<E22hijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [E22hijoComponent]
    });
    fixture = TestBed.createComponent(E22hijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
