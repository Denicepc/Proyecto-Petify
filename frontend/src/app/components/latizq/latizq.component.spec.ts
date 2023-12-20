import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatizqComponent } from './latizq.component';

describe('LatizqComponent', () => {
  let component: LatizqComponent;
  let fixture: ComponentFixture<LatizqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatizqComponent]
    });
    fixture = TestBed.createComponent(LatizqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
