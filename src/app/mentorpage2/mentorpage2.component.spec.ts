import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mentorpage2Component } from './mentorpage2.component';

describe('Mentorpage2Component', () => {
  let component: Mentorpage2Component;
  let fixture: ComponentFixture<Mentorpage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mentorpage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mentorpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
