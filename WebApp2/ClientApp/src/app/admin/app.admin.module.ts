import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminHomeComponent} from './admin-home/admin-home.component';


// const appAdminChildRoutes: Routes = [
//
// ];


const appAdminRoutes: Routes = [
  { path: '', component: AdminHomeComponent, children: [

    ] }

];

@NgModule({
  declarations: [
    AdminHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appAdminRoutes)
  ],
  exports: [RouterModule]
})

export class AppAdminModule {

}
