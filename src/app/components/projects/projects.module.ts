import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: ProjectsComponent
    }])
  ],
  exports: [ProjectsComponent]
})
export class ProjectsModule { }
