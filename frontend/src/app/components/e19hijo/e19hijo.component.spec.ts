import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E19hijoComponent } from './e19hijo.component';

describe('E19hijoComponent', () => {
  let component: E19hijoComponent;
  let fixture: ComponentFixture<E19hijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [E19hijoComponent]
    });
    fixture = TestBed.createComponent(E19hijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
