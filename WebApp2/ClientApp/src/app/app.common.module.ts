import {NgModule} from '@angular/core';
import {SearchPostsPipe} from './pipes/searchPosts.pipe';
import {QuillModule} from 'ngx-quill';

@NgModule({
  declarations: [
    SearchPostsPipe
  ],
  imports: [
    QuillModule.forRoot()

  ],
  providers: [],
  exports: [
    SearchPostsPipe,
    QuillModule
  ]
})
export class AppCommonModule {}
