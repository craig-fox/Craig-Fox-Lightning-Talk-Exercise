import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TopicProposalComponent } from './topic-proposal/topic-proposal.component';
import { ViewProposalsComponent } from './view-proposals/view-proposals.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicProposalComponent,
    ViewProposalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
