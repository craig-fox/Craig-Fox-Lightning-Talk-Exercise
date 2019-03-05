import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {  MatTableModule } from '@angular/material';
import { ViewProposalsComponent } from './view-proposals.component';
import { ProposalService} from '../proposal.service';
import { Proposal } from '../model/proposal';

describe('ViewProposalsComponent', () => {
  const expectedProposals: Proposal[] = [
    new Proposal('Highlighting', 'How I coloured my environment'),
    new Proposal('Christmas', 'Now start promoting in January'),
    new Proposal('No Testing', 'The sad tale of No Test Stu')
  ];
  let component: ViewProposalsComponent;
  let fixture: ComponentFixture<ViewProposalsComponent>;
  let proposalService: ProposalService;
  let proposalServiceSpy: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProposalsComponent ],
      imports: [MatTableModule, HttpClientModule],
      providers: [ ProposalService ]
    })
    .compileComponents();
    proposalService = TestBed.get(ProposalService);
    proposalServiceSpy = spyOn(proposalService, 'getProposals').and.returnValue(expectedProposals);
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
    component.proposalService.getProposals().subscribe(
     items => expect(items).toBe(expectedProposals),
      fail
    );
  });
});
