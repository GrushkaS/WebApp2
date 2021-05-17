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
import {AdminThemeMainComponent} from './admin-theme-main/admin-theme-main.component';
import {ThemeNavBarComponent} from './admin-theme-main/theme-nav-bar/theme-nav-bar.component';
import {ThemeListViewComponent} from './admin-theme-main/theme-list-view/theme-list-view.component';
import {CurthemeService} from './admin-theme-main/service/curtheme.service';
import {AdminThemeFormComponent} from './admin-theme-form/admin-theme-form.component';
import {AdminThemeEditComponent} from './admin-theme-edit/admin-theme-edit.component';
import {AdminThemeAddComponent} from './admin-theme-add/admin-theme-add.component';


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
      { path: 'themes/:id', component: AdminThemeMainComponent, pathMatch: 'full'},
      { path: 'themes/:id/add', component: AdminThemeAddComponent, pathMatch: 'full'},
      { path: 'themes/:id/edit/:id', component: AdminThemeEditComponent, pathMatch: 'full'}

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
    AdminCommentsComponent,
    AdminThemeMainComponent,
    ThemeNavBarComponent,
    ThemeListViewComponent,
    AdminThemeFormComponent,
    AdminThemeAddComponent,
    AdminThemeEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appAdminRoutes),
    FormsModule,
    AppCommonModule
  ],
  exports: [RouterModule],
  bootstrap: [AdminNavMenuComponent, ThemeNavBarComponent],
  providers: [CurthemeService]
})

export class AppAdminModule {

}
