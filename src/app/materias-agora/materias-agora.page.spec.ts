import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasAgoraPage } from './materias-agora.page';

describe('MateriasAgoraPage', () => {
  let component: MateriasAgoraPage;
  let fixture: ComponentFixture<MateriasAgoraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriasAgoraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasAgoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
