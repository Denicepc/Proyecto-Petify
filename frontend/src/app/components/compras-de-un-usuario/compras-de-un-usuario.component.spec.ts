import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasDeUnUsuarioComponent } from './compras-de-un-usuario.component';

describe('ComprasDeUnUsuarioComponent', () => {
  let component: ComprasDeUnUsuarioComponent;
  let fixture: ComponentFixture<ComprasDeUnUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComprasDeUnUsuarioComponent]
    });
    fixture = TestBed.createComponent(ComprasDeUnUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
