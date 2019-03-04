import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {Proposal} from './model/proposal';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {
  mockProposalsUrl = 'assets/mock-proposals.json';
  proposalsUrl = 'http://localhost:3000/server/proposals';

  constructor(private http: HttpClient) { }

  getProposals(): Observable<Proposal[]> {
    return this.http.get<Proposal[]>(this.proposalsUrl);
  }
}
