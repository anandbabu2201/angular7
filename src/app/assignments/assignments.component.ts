import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';
import { AssignmentsService } from '../shared/assignments.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  title = ' My Assignments Application';
  enabled = false;
  formVisible = false;
  name: string;
  dueDate: Date;
  submitted: boolean;
  selectedAssignment: Assignment;
  assignments: Assignment[];

  constructor(private assignmentsService: AssignmentsService) { }

  ngOnInit() {
   this.getAssignments();
  }

  getAssignments() {
    this.assignmentsService.getAssignments().subscribe(result => this.assignments = result);
  }
  onAddButtClick () {
    this.formVisible = !this.formVisible;
    this.selectedAssignment = null;
  }

  setSelected(assignment: Assignment) {
  this.selectedAssignment = assignment;
  }

  onNewAssignment(event: Assignment) {
    this.assignmentsService.addAssignment(event).subscribe(success => console.log(success));
    this.formVisible = false;
  }


}
