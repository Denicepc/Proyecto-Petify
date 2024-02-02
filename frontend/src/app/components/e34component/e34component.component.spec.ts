import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E34componentComponent } from './e34component.component';

describe('E34componentComponent', () => {
  let component: E34componentComponent;
  let fixture: ComponentFixture<E34componentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [E34componentComponent]
    });
    fixture = TestBed.createComponent(E34componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
