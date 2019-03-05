import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {Proposal} from './model/proposal';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {
  proposalsUrl = 'http://localhost:3000/server/proposals';
  saveProposalUrl = 'http://localhost:3000/server/proposals/add'

  constructor(private http: HttpClient) { }

  getProposals(): Observable<Proposal[]> {
    return this.http.get<Proposal[]>(this.proposalsUrl);
  }

  saveProposal(proposal: Proposal): Observable<Proposal> {
    return this.http.post<Proposal>(this.saveProposalUrl, proposal);
  }
}
