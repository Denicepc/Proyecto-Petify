import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatderComponent } from './latder.component';

describe('LatderComponent', () => {
  let component: LatderComponent;
  let fixture: ComponentFixture<LatderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatderComponent]
    });
    fixture = TestBed.createComponent(LatderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
