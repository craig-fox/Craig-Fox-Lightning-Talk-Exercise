import { Component, OnInit } from '@angular/core';
import {ProposalService} from '../proposal.service';
import {Proposal} from '../model/proposal';

@Component({
  selector: 'app-view-proposals',
  templateUrl: './view-proposals.component.html',
  styleUrls: ['./view-proposals.component.css'],
  providers: [ProposalService]
})
export class ViewProposalsComponent implements OnInit {
  proposals = new Array<Proposal>();
  proposalService: ProposalService;
  columnsToDisplay = ['topic', 'description'];
  constructor(proposalService: ProposalService) {
    this.proposalService = proposalService;
  }
  ngOnInit() {
    this.proposalService.getProposals().subscribe(data => {
      this.proposals = data.map(item => {
        const proposal = new Proposal(item.topic, item.description);
        return proposal;
      });
    },
      err => {
        console.log('Error in retrieving data', err);
      });
  }

}
