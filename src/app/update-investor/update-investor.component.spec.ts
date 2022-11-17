import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInvestorComponent } from './update-investor.component';

describe('UpdateInvestorComponent', () => {
  let component: UpdateInvestorComponent;
  let fixture: ComponentFixture<UpdateInvestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateInvestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
