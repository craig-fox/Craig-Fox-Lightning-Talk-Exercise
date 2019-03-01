import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicProposalComponent} from './topic-proposal/topic-proposal.component';
import { ViewProposalsComponent} from './view-proposals/view-proposals.component';

const routes: Routes = [
  { path: 'topic-proposal', component: TopicProposalComponent },
  { path: 'view-proposals', component: ViewProposalsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
