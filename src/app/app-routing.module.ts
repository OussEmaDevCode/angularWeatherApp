import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WeahterInfoComponent} from './weahter-info/weahter-info.component';


const routes: Routes = [
  {path: '', component: WeahterInfoComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
