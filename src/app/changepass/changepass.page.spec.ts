import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepassPage } from './changepass.page';

describe('ChangepassPage', () => {
  let component: ChangepassPage;
  let fixture: ComponentFixture<ChangepassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangepassPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
