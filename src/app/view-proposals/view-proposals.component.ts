import { Component, OnInit } from '@angular/core';
const mockData = [{topic: 'Highlighting', description: 'How I coloured my environment', email: 'fluoro@rascal.com'},
                  {topic: 'Christmas', description: 'Now start promoting in January', email: 'sandpiper@pond.com'},
                  {topic: 'No Testing', description: 'The sad tale of No Test Stu', email: 'ricky@leejones.com'}]
@Component({
  selector: 'app-view-proposals',
  templateUrl: './view-proposals.component.html',
  styleUrls: ['./view-proposals.component.css']
})
export class ViewProposalsComponent implements OnInit {
  proposals = []
  columnsToDisplay = ['topic', 'description'];

  constructor() {
    this.proposals.push(...mockData);
  }

  ngOnInit() {
  }

}
