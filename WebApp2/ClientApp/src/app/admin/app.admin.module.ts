import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppAdminComponent} from './app.admin.component';
import {AdminNavMenuComponent} from './admin-nav-menu/admin-nav-menu.component';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {AdminPostListComponent} from './admin-post-list/admin-post-list.component';


// const appAdminChildRoutes: Routes = [
//
// ];


const appAdminRoutes: Routes = [
  { path: '', component: AppAdminComponent, children: [
      { path: '', component: AdminHomeComponent},
      { path: 'posts-list', component: AdminPostListComponent}

    ]}
];

@NgModule({
  declarations: [
    AppAdminComponent,
    AdminNavMenuComponent,
    AdminHomeComponent,
    AdminPostListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appAdminRoutes)
  ],
  exports: [RouterModule],
  bootstrap: [AdminNavMenuComponent]
})

export class AppAdminModule {

}
