import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  MatTableModule } from '@angular/material';
import { ViewProposalsComponent } from './view-proposals.component';

describe('ViewProposalsComponent', () => {
  let component: ViewProposalsComponent;
  let fixture: ComponentFixture<ViewProposalsComponent>;
  const mockData = [{topic: 'Highlighting', description: 'How I coloured my environment', email: 'fluoro@rascal.com'},
    {topic: 'Christmas', description: 'Now start promoting in January', email: 'sandpiper@pond.com'},
    {topic: 'No Testing', description: 'The sad tale of No Test Stu', email: 'ricky@leejones.com'}]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProposalsComponent ],
      imports: [MatTableModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load data into table', () => {
    expect(component.proposals).toEqual(mockData);
  });
});
