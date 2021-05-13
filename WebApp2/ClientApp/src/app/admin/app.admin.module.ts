import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppAdminComponent} from './app.admin.component';
import {AdminNavMenuComponent} from './admin-nav-menu/admin-nav-menu.component';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {AdminPostListComponent} from './admin-post-list/admin-post-list.component';
import {AdminPostAddComponent} from './admin-post-add/admin-post-add.component';
import {AdminPostViewComponent} from './admin-post-view/admin-post-view.component';
import {AdminPostEditComponent} from './admin-post-edit/admin-post-edit.component';
import {AdminPostFormComponent} from './admin-post-form/admin-post-form.component';
import {FormsModule} from '@angular/forms';
import {AppCommonModule} from '../app.common.module';
import {AdminCommentsComponent} from './admin-comments/admin-comments.component';


// const appAdminChildRoutes: Routes = [
//
// ];


const appAdminRoutes: Routes = [
  { path: '', component: AppAdminComponent, children: [
      { path: '', component: AdminHomeComponent},
      { path: 'posts-list', component: AdminPostListComponent},
      { path: 'posts-list/add', component: AdminPostAddComponent},
      { path: 'posts-list/:id', component: AdminPostViewComponent, pathMatch: 'full'},
      { path: 'posts-list/:id/edit', component: AdminPostEditComponent, pathMatch: 'full'},

    ]}
];

@NgModule({
  declarations: [
    AppAdminComponent,
    AdminNavMenuComponent,
    AdminHomeComponent,
    AdminPostListComponent,
    AdminPostAddComponent,
    AdminPostViewComponent,
    AdminPostEditComponent,
    AdminPostFormComponent,
    AdminCommentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appAdminRoutes),
    FormsModule,
    AppCommonModule
  ],
  exports: [RouterModule],
  bootstrap: [AdminNavMenuComponent]
})

export class AppAdminModule {

}
