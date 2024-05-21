import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContarProducDistintosComponent } from './ContarProducDistintosComponent';

describe('ContarProducDistintosComponent', () => {
  let component: ContarProducDistintosComponent;
  let fixture: ComponentFixture<ContarProducDistintosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContarProducDistintosComponent]
    });
    fixture = TestBed.createComponent(ContarProducDistintosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
