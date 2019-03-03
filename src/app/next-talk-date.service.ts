import { Injectable } from '@angular/core';
import {Moment} from 'moment';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class NextTalkDateService {
  nextTalkDate (today: Moment) {
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
}
