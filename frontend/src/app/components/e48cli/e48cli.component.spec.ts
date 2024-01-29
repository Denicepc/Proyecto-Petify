import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E48cliComponent } from './e48cli.component';

describe('E48cliComponent', () => {
  let component: E48cliComponent;
  let fixture: ComponentFixture<E48cliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [E48cliComponent]
    });
    fixture = TestBed.createComponent(E48cliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
