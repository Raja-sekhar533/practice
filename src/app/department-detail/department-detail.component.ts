import { ActivatedRoute , Router , ParamMap} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-detail',
  template: `
    <p>
you are selected the id {{departmentId}}    </p>
<button class="btn btn-danger" (click)="testOne()">test</button>
<button class="btn btn-primary" (click)="testTwo()">test2</button>
<a (click)="goNext()">go next</a>
<a (click)="goBack()">go back</a>
<button class="btn" (click)="gotoBack()">back</button>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
    public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
          //let id = parseInt(this.route.snapshot.paramMap.get('id'));
          //this.departmentId = id ;
          this.route.paramMap.subscribe((params: ParamMap) =>{
            let id = parseInt(params.get('id'));
            this.departmentId = id ;
          });
  }
goNext(){
  let nextId = this.departmentId + 1;
  this.router.navigate(['/department', nextId]);
}
goBack(){
  let previousId = this.departmentId - 1;
  this.router.navigate(['/department', previousId]);
}
gotoBack(){
  let selectedId = this.departmentId ? this.departmentId : null;
 // this.router.navigate(['/departments', {id: selectedId}])
this.router.navigate(['../', {id: selectedId}], { relativeTo: this.route})}

testOne(){
  this.router.navigate(['/heroes'], {relativeTo: this.route});
}
testTwo(){
  this.router.navigate(['/dashboard'], {relativeTo: this.route});
}
}
