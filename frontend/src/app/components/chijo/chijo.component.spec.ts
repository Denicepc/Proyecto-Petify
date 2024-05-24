import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChijoComponent } from './chijo.component';

describe('ChijoComponent', () => {
  let component: ChijoComponent;
  let fixture: ComponentFixture<ChijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChijoComponent]
    });
    fixture = TestBed.createComponent(ChijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
