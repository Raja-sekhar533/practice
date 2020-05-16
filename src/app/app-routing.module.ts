import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CourseListComponent } from './course-list/course-list.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterOutlet, RouterModule } from '@angular/router';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

const routes: Routes = [{path: ' ', redirectTo: '/dashboard', pathMatch: 'full'} , {path: 'heroes', component: HeroesComponent},
{path: 'detail/:id', component: HeroDetailsComponent},
  { path: 'dashboard', component: DashBoardComponent },
{path: 'departments', component: DepartmentsComponent} ,
{
  path: 'departments/:id' ,
 component: DepartmentDetailComponent,
  children: [{ path: 'heroes', component: HeroesComponent},
{path: 'dashboard', component: DashBoardComponent}]
},
{path: 'courselist', component: CourseListComponent},
{path: '**', component: PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
export const RoutingComponents = [PageNotFoundComponent , DepartmentsComponent, CourseListComponent,
                                  DepartmentDetailComponent];
