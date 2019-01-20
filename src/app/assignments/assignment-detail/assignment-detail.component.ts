import { Component, OnInit, Input } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from 'src/app/shared/assignments.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
 @Input() passedAssignment: Assignment;
  constructor(private assignmentsServie: AssignmentsService) { }

  ngOnInit() {
  }
  onAssignmentSubmitted() {
    this.passedAssignment.submitted = true;
    this.assignmentsServie.updateAssignment(this.passedAssignment).subscribe(res => console.log(res));
 }


}
