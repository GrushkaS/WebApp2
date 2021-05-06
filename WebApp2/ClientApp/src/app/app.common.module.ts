import {NgModule} from '@angular/core';
import {SearchPostsPipe} from './pipes/searchPosts.pipe';


@NgModule({
  declarations: [
    SearchPostsPipe
  ],
  imports: [
  ],
  providers: [],
  exports: [
    SearchPostsPipe
  ]
})
export class AppCommonModule {}
