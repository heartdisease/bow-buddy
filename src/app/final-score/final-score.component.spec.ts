import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalScorePage } from './final-score.page';

describe('FinalScorePage', () => {
  let component: FinalScorePage;
  let fixture: ComponentFixture<FinalScorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FinalScorePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalScorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
