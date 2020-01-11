import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramPage } from './program.page';

describe('ProgramPage', () => {
  let component: ProgramPage;
  let fixture: ComponentFixture<ProgramPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
