import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedPage } from './purchased.page';

describe('PurchasedPage', () => {
  let component: PurchasedPage;
  let fixture: ComponentFixture<PurchasedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
