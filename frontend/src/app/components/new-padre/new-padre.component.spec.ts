import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPadreComponent } from './new-padre.component';

describe('NewPadreComponent', () => {
  let component: NewPadreComponent;
  let fixture: ComponentFixture<NewPadreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPadreComponent]
    });
    fixture = TestBed.createComponent(NewPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
