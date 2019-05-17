import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarLabPage } from './reservar-lab.page';

describe('ReservarLabPage', () => {
  let component: ReservarLabPage;
  let fixture: ComponentFixture<ReservarLabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservarLabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservarLabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
