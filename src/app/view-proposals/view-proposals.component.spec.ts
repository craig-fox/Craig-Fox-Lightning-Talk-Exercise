import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProposalsComponent } from './view-proposals.component';

describe('ViewProposalsComponent', () => {
  let component: ViewProposalsComponent;
  let fixture: ComponentFixture<ViewProposalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProposalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
