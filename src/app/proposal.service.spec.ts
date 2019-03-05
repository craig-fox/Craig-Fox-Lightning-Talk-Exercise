import { TestBed } from '@angular/core/testing';
import { ProposalService } from './proposal.service';
import { HttpClientModule } from '@angular/common/http';
import {Proposal} from './model/proposal';
import {defer} from 'rxjs';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('ProposalService', () => {
  let httpClientSpy: {get: jasmine.Spy, post: jasmine.Spy};
  let proposalService: ProposalService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProposalService],
      imports: [HttpClientModule]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    proposalService = new ProposalService(<any>httpClientSpy);
  })

  it('should be created', () => {
    const service: ProposalService = TestBed.get(ProposalService);
    expect(service).toBeTruthy();
  });
  it('should return expected proposals', () => {
    const expectedProposals: Proposal[] = [
      new Proposal('Highlighting', 'How I coloured my environment'),
      new Proposal('Christmas', 'Now start promoting in January'),
      new Proposal('No Testing', 'The sad tale of No Test Stu')
    ];
    httpClientSpy.get.and.returnValue(asyncData(expectedProposals));
    proposalService.getProposals().subscribe(
      proposals => expect(proposals).toEqual(expectedProposals, 'expected proposals'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'called once');
  });
  it('should save a proposal', () => {
    const proposal = new Proposal('test', 'test topic', 'test@test.com');
    httpClientSpy.get.and.returnValue(asyncData(proposal));
    proposalService.saveProposal(proposal).subscribe(
      item => expect(item).toEqual(proposal, 'should return the proposal'),
      fail)
    ;
    expect(httpClientSpy.get.calls.count()).toBe(1, 'called once');
  });
});
