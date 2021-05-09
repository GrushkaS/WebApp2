import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Comment} from '../models/comment';

@Injectable()
export class CommentService {
  private url = '/api/comments';

  constructor(private http: HttpClient) {
  }

  getComments(idPost: number) {
    console.log(this.url);
    console.log('Service id Post ' + idPost);
    // @ts-ignore
    return this.http.get(this.url + '/p/' + idPost);
  }

  getComment(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  createComment(comment: Comment) {
    return this.http.post(this.url, comment);
  }

  updateComment(comment: Comment) {

    return this.http.put(this.url, comment);
  }

  deleteComment(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
