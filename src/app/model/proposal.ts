export class Proposal {
  _topic: string;
  _description: string;
  _emailAddress: string;
  _submitted: string;
  _talkDate: string;

  constructor(topic: string, description: string, emailAddress: string = '') {
    this._topic = topic;
    this._description = description;
    this._emailAddress = emailAddress;
  }
  get topic(){
    return this._topic;
  }
  set topic(topic: string){
    this._topic = topic;
  }
  get description(){
    return this._description;
  }
  set description(description: string){
    this._description = description;
  }
  get emailAddress(){
    return this._emailAddress;
  }
  set emailAddress(emailAddress: string){
    this._emailAddress = emailAddress;
  }
  get submitted(){
    return this._submitted;
  }
  set submitted(submitted: string){
    this._submitted = submitted;
  }
  get talkDate(){
    return this._submitted;
  }
  set talkDate(talkDate: string){
    this._talkDate = talkDate;
  }
}
