import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Epadre16Component } from './epadre16.component';

describe('Epadre16Component', () => {
  let component: Epadre16Component;
  let fixture: ComponentFixture<Epadre16Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Epadre16Component]
    });
    fixture = TestBed.createComponent(Epadre16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
