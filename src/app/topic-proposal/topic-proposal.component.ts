import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import {Moment} from 'moment';
import { NextTalkDateService} from '../next-talk-date.service';
import {Proposal} from '../model/proposal';
import {ProposalService} from '../proposal.service';

@Component({
  selector: 'app-topic-proposal',
  templateUrl: './topic-proposal.component.html',
  providers: [NextTalkDateService, ProposalService],
  styleUrls: ['./topic-proposal.component.css']
})
export class TopicProposalComponent implements OnInit {
  proposalForm: FormGroup;
  nextTalkDateService: NextTalkDateService;
  proposalService: ProposalService;
  onSubmit() {
    const formValue: any = this.proposalForm.value;
    const proposal: Proposal = new Proposal(formValue['topic'], formValue['topicDescription'], formValue['emailAddress']);
    const now: Moment = moment();
    proposal.submitted = now.format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS);
    proposal.talkDate = this.nextTalkDateService.nextTalkDate(now);
    this.proposalService.saveProposal(proposal).subscribe(
      item => {
        console.log('Saved proposal', item);
      },
      err => {
        console.log('Error in saving', err);
      }
    );
  }
  constructor(nextTalkDateService: NextTalkDateService, proposalService: ProposalService) {
    this.nextTalkDateService = nextTalkDateService;
    this.proposalService = proposalService;
  }

  ngOnInit() {
    const topicValidators: any = [Validators.required, Validators.maxLength(80)];
    const topicDescriptionValidators: any = [Validators.required, Validators.maxLength(120)];
    const emailValidators: any = [Validators.required, Validators.maxLength(255), Validators.email]

    this.proposalForm = new FormGroup({
      'topic': new FormControl('', topicValidators),
      'topicDescription': new FormControl('', topicDescriptionValidators),
      'emailAddress': new FormControl('you@default', emailValidators)
    });
  }

}
