import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHijoComponent } from './new-hijo.component';

describe('NewHijoComponent', () => {
  let component: NewHijoComponent;
  let fixture: ComponentFixture<NewHijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewHijoComponent]
    });
    fixture = TestBed.createComponent(NewHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
