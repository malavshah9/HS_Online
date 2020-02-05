import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleJackpotPage } from './double-jackpot.page';

describe('DoubleJackpotPage', () => {
  let component: DoubleJackpotPage;
  let fixture: ComponentFixture<DoubleJackpotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleJackpotPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleJackpotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
