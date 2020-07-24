import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {
  //   path: 'about',
  //   loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
  // },
  // {
  //   path: 'projects',
  //   loadChildren: () => import('../projects/projects.module').then(m => m.ProjectsModule)
  // },
  // {
  //   path: 'experiments',
  //   loadChildren: () => import('../experiments/experiments.module').then(m => m.ExperimentsModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SelectorRoutingModule { }
