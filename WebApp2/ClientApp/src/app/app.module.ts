import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ExitAboutGuard} from './services/exit.about.guard';


const appRoutes: Routes = [
  {path: '', loadChildren: './unlogined/app.unlogined.module#AppUnloginedModule'},
  {path: 'admin', loadChildren: './admin/app.admin.module#AppAdminModule'},
  { path: '**', component: NotFoundComponent}
];


@NgModule({
  declarations: [
    NotFoundComponent,
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ExitAboutGuard],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
