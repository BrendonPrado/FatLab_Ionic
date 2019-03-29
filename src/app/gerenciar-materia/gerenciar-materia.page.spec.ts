import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarMateriaPage } from './gerenciar-materia.page';

describe('GerenciarMateriaPage', () => {
  let component: GerenciarMateriaPage;
  let fixture: ComponentFixture<GerenciarMateriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciarMateriaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarMateriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
