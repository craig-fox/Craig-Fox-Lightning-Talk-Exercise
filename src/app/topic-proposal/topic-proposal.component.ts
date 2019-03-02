import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import {Moment} from 'moment';

class Submission {
  topic: string;
  topicDescription: string;
  emailAddress: string;
  submissionTime: string;
  talkDate: string;
  static nextTalkDate(today: Moment): string {
    let talk: Moment = today.clone();
    const month: number = today.month();
    const forward: number = month % 2 === 0 ? 1 : 2;
    talk = talk.add(forward, 'month');
    talk = talk.startOf('month');
    const TUESDAY = 2;
    const thisDay = talk.isoWeekday();
    if ( thisDay <= TUESDAY ) {
      talk = talk.isoWeekday(TUESDAY);
    } else {
      talk = talk.add(1, 'weeks').isoWeekday(TUESDAY);
    }
    return talk.format(moment.HTML5_FMT.DATE);
  }

  constructor(topic: string, topicDescription: string, emailAddress: string) {
    this.topic = topic;
    this.topicDescription = topicDescription;
    this.emailAddress = emailAddress;
    const now: Moment = moment();
    this.submissionTime = now.format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS);
    this.talkDate = Submission.nextTalkDate(now);
  }
}

@Component({
  selector: 'app-topic-proposal',
  templateUrl: './topic-proposal.component.html',
  styleUrls: ['./topic-proposal.component.css']
})
export class TopicProposalComponent implements OnInit {
  proposalForm: FormGroup;
  onSubmit() {
    const formValue: any = this.proposalForm.value;
    const submission: Submission = new Submission(formValue['topic'], formValue['topicDescription'], formValue['emailAddress']);
    console.warn('Payload', submission);
  }
  constructor() {}

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
