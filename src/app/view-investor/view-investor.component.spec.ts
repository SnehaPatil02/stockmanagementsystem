import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInvestorComponent } from './view-investor.component';

describe('ViewInvestorComponent', () => {
  let component: ViewInvestorComponent;
  let fixture: ComponentFixture<ViewInvestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInvestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
