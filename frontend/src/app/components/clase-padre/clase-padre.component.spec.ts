import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasePadreComponent } from './clase-padre.component';

describe('ClasePadreComponent', () => {
  let component: ClasePadreComponent;
  let fixture: ComponentFixture<ClasePadreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClasePadreComponent]
    });
    fixture = TestBed.createComponent(ClasePadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
