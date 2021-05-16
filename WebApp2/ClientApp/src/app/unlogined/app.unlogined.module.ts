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
import {PostFormComponent} from './post-form/post-form.component';
import {PostAddComponent} from './post-add/post-add.component';
import {PostEditComponent} from './post-edit/post-edit.component';
import {RecommendationComponent} from './recommendation/recommendation.component';
import {DataAnalysis} from '../services/data.analysis';
import {DataService} from '../services/data.service';
import {ThemeMainComponent} from './theme-main/theme-main.component';
import {ThemeNavBarComponent} from './theme-main/theme-nav-bar/theme-nav-bar.component';
import {ThemeListViewComponent} from './theme-main/theme-list-view/theme-list-view.component';
import {CurthemeService} from './theme-main/service/currenttheme.service';


const appUnloginedRoutes: Routes = [
  {path: '', component: AppUnloginedComponent, children: [
      { path: '', component: HomeComponent},
      { path: 'posts-list', component: PostListComponent},
      { path: 'posts-list/add', component: PostAddComponent},
      { path: 'posts-list/:id', component: PostViewComponent, pathMatch: 'full'},
      { path: 'posts-list/:id/edit', component: PostEditComponent, pathMatch: 'full'},
      { path: 'log-in', component: LogInComponent},
      { path: 'sign-up', component: SignUpComponent, canDeactivate: [ExitAboutGuard]},
      { path: 'themes/:id', component: ThemeMainComponent}
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
    CommentsComponent,
    PostFormComponent,
    PostAddComponent,
    PostEditComponent,
    RecommendationComponent,
    ThemeMainComponent,
    ThemeNavBarComponent,
    ThemeListViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appUnloginedRoutes),
    FormsModule,
    ReactiveFormsModule,
    AppCommonModule
  ],
  exports: [RouterModule],
  providers: [ExitAboutGuard, DataAnalysis, DataService, CurthemeService],
  bootstrap: [AppUnloginedComponent]
})

export class AppUnloginedModule {

}
