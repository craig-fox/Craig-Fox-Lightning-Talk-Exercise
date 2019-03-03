import { TestBed } from '@angular/core/testing';

import { NextTalkDateService } from './next-talk-date.service';
import {Moment} from 'moment';
import * as moment from 'moment';

describe('NextTalkDateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NextTalkDateService = TestBed.get(NextTalkDateService);
    expect(service).toBeTruthy();
  });

  it('should return 4 June 2019 if now is April', () => {
    const service: NextTalkDateService = TestBed.get(NextTalkDateService);
    let testDate: Moment = moment();
    testDate = testDate.year(2019).month(3).date(1);
    const nextDate = service.nextTalkDate(testDate);
    const targetDate = moment().year(2019).month(5).date(4)
    expect(nextDate).toEqual(targetDate.format(moment.HTML5_FMT.DATE));
  });
});
