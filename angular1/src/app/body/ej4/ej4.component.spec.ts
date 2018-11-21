import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej4Component } from './ej4.component';

describe('Ej4Component', () => {
  let component: Ej4Component;
  let fixture: ComponentFixture<Ej4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ej4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ej4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
