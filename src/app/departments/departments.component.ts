import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  public selectedId ;
    departments = [{ id: 1, name: 'cse'}, {id: 2 , name: 'civil'}, {id: 3, name: 'mech'}, {id: 4, name: 'ece'}, {id: 5, name: 'eee'}];
  constructor(private route: Router, private routes: ActivatedRoute) { }

  ngOnInit(): void {
    this.routes.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;

    })
  }
  onSelect(department) {
   // this.route.navigate(['/department', department.id]);
  this.route.navigate([department.id], {relativeTo: this.routes});
  }
   isSelected(department){
     return department.id === this.selectedId;
   }
  }

