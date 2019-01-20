import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable , of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  assignments: Assignment[] = [
    {
      'name' : 'Anand',
      'dueDate': new Date('2019-01-22'),
      'submitted': true
    },
    {
      'name': 'Raja',
      'dueDate': new Date('2019-01-21'),
      'submitted': false
    },
    {
      'name': 'kiran',
      'dueDate': new Date('2019-01-21'),
      'submitted': true
    }
   ];
  constructor() { }
  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments);
  }
  addAssignment(assignment: Assignment): Observable<string> {
    this.assignments.push(assignment);
    return of('assignment added');
  }

  updateAssignment( assignment: Assignment): Observable<string> {
    this.assignments.forEach((assign, i) => {
      if (assign === assignment) {
       this.assignments[i] = assignment;
      }
    });
    return of('updated seuccessfully');

  }
}
