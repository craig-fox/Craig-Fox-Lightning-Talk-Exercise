import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';

class Submission {
  topic: string;
  topicDescription: string;
  emailAddress: string;
  submissionTime: string;
  talkDate: string;

  constructor(topic: string, topicDescription: string, emailAddress: string) {
    this.topic = topic;
    this.topicDescription = topicDescription;
    this.emailAddress = emailAddress;
    this.submissionTime = moment().format('YYYY-MM-DD HH:mm:ss');
    this.talkDate = moment('2019-04-02').format('YYYY-MM-DD');
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
    const formValue = this.proposalForm.value;
    const submission = new Submission(formValue['topic'], formValue['topicDescription'], formValue['emailAddress']);
    console.warn('Payload', submission);
  }
  constructor() {}

  ngOnInit() {
    const topicValidators = [Validators.required, Validators.maxLength(80)];
    const topicDescriptionValidators = [Validators.required, Validators.maxLength(120)];
    const emailValidators = [Validators.required, Validators.maxLength(255), Validators.email]

    this.proposalForm = new FormGroup({
      'topic': new FormControl('', topicValidators),
      'topicDescription': new FormControl('', topicDescriptionValidators),
      'emailAddress': new FormControl('you@default', emailValidators)
    });
  }

}
