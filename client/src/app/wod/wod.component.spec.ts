/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WodComponent } from './wod.component';

describe('WodComponent', () => {
  let component: WodComponent;
  let fixture: ComponentFixture<WodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
