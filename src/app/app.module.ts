import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TopicProposalComponent } from './topic-proposal/topic-proposal.component';
import { ViewProposalsComponent } from './view-proposals/view-proposals.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {  MatTableModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TopicProposalComponent,
    ViewProposalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
