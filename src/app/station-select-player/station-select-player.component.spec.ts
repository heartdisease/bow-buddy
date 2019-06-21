import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationSelectPlayerPage } from './station-select-player.page';

describe('StationSelectPlayerPage', () => {
  let component: StationSelectPlayerPage;
  let fixture: ComponentFixture<StationSelectPlayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StationSelectPlayerPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationSelectPlayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
