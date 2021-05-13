import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NavMenuComponent} from './nav-menu/nav-menu.component';
import {PostListComponent} from './post-list/post-list.component';
import {PostViewComponent} from './post-view/post-view.component';
import {LogInComponent} from './authorization/log-in/log-in.component';
import {SignUpComponent} from './authorization/sign-up/sign-up.component';
import {CommonModule} from '@angular/common';
import {ExitAboutGuard} from '../services/exit.about.guard';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppUnloginedComponent} from './app.unlogined.component';
import {AppCommonModule} from '../app.common.module';
import {CommentsComponent} from './comments/comments.component';


const appUnloginedRoutes: Routes = [
  {path: '', component: AppUnloginedComponent, children: [
      { path: '', component: HomeComponent},
      { path: 'posts-list', component: PostListComponent},
      { path: 'posts-list/:id', component: PostViewComponent, pathMatch: 'full'},
      { path: 'log-in', component: LogInComponent},
      { path: 'sign-up', component: SignUpComponent, canDeactivate: [ExitAboutGuard]},
    ]}
];

@NgModule({
  declarations: [
    AppUnloginedComponent,
    NavMenuComponent,
    HomeComponent,
    PostListComponent,
    PostViewComponent,
    LogInComponent,
    SignUpComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appUnloginedRoutes),
    FormsModule,
    ReactiveFormsModule,
    AppCommonModule
  ],
  exports: [RouterModule],
  providers: [ExitAboutGuard],
  bootstrap: [AppUnloginedComponent]
})

export class AppUnloginedModule {

}
