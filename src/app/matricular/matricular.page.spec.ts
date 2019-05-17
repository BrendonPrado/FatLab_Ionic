import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatricularPage } from './matricular.page';

describe('MatricularPage', () => {
  let component: MatricularPage;
  let fixture: ComponentFixture<MatricularPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatricularPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatricularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
