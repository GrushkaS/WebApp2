import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ThemeN} from '../models/themen';



@Injectable()
export class ThemeService {
  private url1 = '/api/themes';
  private url2 = '/api/themesn';

  constructor(private http: HttpClient) {
  }

  getThemesn() {
    return this.http.get(this.url2);
  }

  createThemen(theme: ThemeN) {
    return this.http.post(this.url2, theme);
  }
}
