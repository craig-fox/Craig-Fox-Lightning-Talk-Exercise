import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {  MatTableModule } from '@angular/material';
import { ViewProposalsComponent } from './view-proposals.component';
import { ProposalService} from '../proposal.service';
import { Proposal } from '../model/proposal';

describe('ViewProposalsComponent', () => {
  let component: ViewProposalsComponent;
  let fixture: ComponentFixture<ViewProposalsComponent>;
  let proposalServiceSpy: {get: jasmine.Spy};
  beforeEach(async(() => {
    proposalServiceSpy = jasmine.createSpyObj('ProposalService', ['getProposals']);
    TestBed.configureTestingModule({
      declarations: [ ViewProposalsComponent ],
      imports: [MatTableModule, HttpClientModule],
      providers: [  { provide: ProposalService, useValue: proposalServiceSpy }]
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
  it('should load data into table', () => {
    const expectedProposals: Proposal[] = [
      new Proposal('Highlighting', 'How I coloured my environment'),
      new Proposal('Christmas', 'Now start promoting in January'),
      new Proposal('No Testing', 'The sad tale of No Test Stu')
    ];
    proposalServiceSpy.get.and.returnValue(expectedProposals);
    expect(component.proposals).toBe(expectedProposals);
  });
});
