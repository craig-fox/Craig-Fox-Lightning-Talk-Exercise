import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TopicProposalComponent } from './topic-proposal.component';
import { ReactiveFormsModule } from '@angular/forms';
import {  MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('TopicProposalComponent', () => {
  let component: TopicProposalComponent;
  let fixture: ComponentFixture<TopicProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicProposalComponent ],
      imports: [ReactiveFormsModule, MatInputModule, NoopAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
