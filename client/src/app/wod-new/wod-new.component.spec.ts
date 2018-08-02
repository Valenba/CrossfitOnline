/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WodNewComponent } from './wod-new.component';

describe('WodNewComponent', () => {
  let component: WodNewComponent;
  let fixture: ComponentFixture<WodNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WodNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WodNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
