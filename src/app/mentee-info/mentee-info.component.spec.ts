import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenteeinfoComponent } from './menteeinfo.component';

describe('MenteeinfoComponent', () => {
  let component: MenteeinfoComponent;
  let fixture: ComponentFixture<MenteeinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenteeinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenteeinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
