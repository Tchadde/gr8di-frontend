import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mentorpage1Component } from './mentorpage1.component';

describe('Mentorpage1Component', () => {
  let component: Mentorpage1Component;
  let fixture: ComponentFixture<Mentorpage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mentorpage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mentorpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
