import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TopicProposalComponent } from './topic-proposal.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {  MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProposalService} from '../proposal.service';
import { Proposal } from '../model/proposal';

describe('TopicProposalComponent', () => {
  const proposal = new Proposal('test', 'test topic', 'test@test.com');
  let component: TopicProposalComponent;
  let fixture: ComponentFixture<TopicProposalComponent>;
  let proposalService: ProposalService;
  let proposalServiceSpy: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicProposalComponent ],
      imports: [ReactiveFormsModule, MatInputModule, NoopAnimationsModule, HttpClientModule],
      providers: [ ProposalService ]
    })
    .compileComponents();

    proposalService = TestBed.get(ProposalService);
    proposalServiceSpy = spyOn(proposalService, 'saveProposal').and.returnValue(proposal);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call saveProposal', () => {
    proposalService.saveProposal(proposal);
    expect(proposalService.saveProposal).toHaveBeenCalledTimes(1);
  });
});
