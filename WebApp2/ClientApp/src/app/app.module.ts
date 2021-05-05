import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './post-list/post-list.component';
import {PostViewComponent} from './post-view/post-view.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LogInComponent} from './authorization/log-in/log-in.component';
import {SignUpComponent} from './authorization/sign-up/sign-up.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'posts-list', component: PostListComponent},
  { path: 'posts-list/:id', component: PostViewComponent, pathMatch: 'full'},
  { path: 'log-in', component: LogInComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: '**', component: NotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    PostListComponent,
    PostViewComponent,
    NotFoundComponent,
    LogInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot( appRoutes
      // { path: '', component: HomeComponent},
      // { path: 'posts-list', component: PostListComponent},
      // { path: 'posts-list/:id', component: PostViewComponent, pathMatch: 'full'},
      // { path: '**', component: NotFoundComponent}
    )
  ],
  providers: [],
  bootstrap: [AppComponent, NavMenuComponent]
})
export class AppModule { }
