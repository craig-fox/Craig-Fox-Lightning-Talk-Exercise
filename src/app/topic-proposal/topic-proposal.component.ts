import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import {Moment} from 'moment';
import { NextTalkDateService} from '../next-talk-date.service';

class Submission {
  topic: string;
  topicDescription: string;
  emailAddress: string;
  _submissionTime: string;
  _talkDate: string;

  set submissionTime(submission_time: string){
    this._submissionTime = submission_time;
  }

  set talkDate(talk_date: string){
    this._talkDate = talk_date;
  }

  constructor(topic: string, topicDescription: string, emailAddress: string) {
    this.topic = topic;
    this.topicDescription = topicDescription;
    this.emailAddress = emailAddress;
  }
}

@Component({
  selector: 'app-topic-proposal',
  templateUrl: './topic-proposal.component.html',
  providers: [NextTalkDateService],
  styleUrls: ['./topic-proposal.component.css']
})
export class TopicProposalComponent implements OnInit {
  proposalForm: FormGroup;
  nextTalkDateService: NextTalkDateService;
  onSubmit() {
    const formValue: any = this.proposalForm.value;
    const submission: Submission = new Submission(formValue['topic'], formValue['topicDescription'], formValue['emailAddress']);
    const now: Moment = moment();
    submission.submissionTime = now.format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS);
    submission.talkDate = this.nextTalkDateService.nextTalkDate(now);
    console.warn('Payload', submission);
  }
  constructor(nextTalkDateService: NextTalkDateService) {}

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
