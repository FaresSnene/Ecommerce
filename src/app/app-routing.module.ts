import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './compenents/add/add.component';
import { HomeComponent } from './compenents/home/home.component';
import { UpdateComponent } from './compenents/update/update.component';
import { ViewComponent } from './compenents/view/view.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'update/:id',
    component: UpdateComponent,
  },
  {
    path: 'view/:id',
    component: ViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
