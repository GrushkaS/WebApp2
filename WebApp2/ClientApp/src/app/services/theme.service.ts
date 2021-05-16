import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ThemeN} from '../models/themen';
import {Theme} from '../models/theme';



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

  getThemes(id: number) {
    return this.http.get(this.url1 + '/t/' + id);
  }

  getTheme(id: number) {
    return this.http.get(this.url1 + '/' + id);
  }

  createTheme(theme: Theme) {
    return this.http.post(this.url1, theme);
  }

  updateTheme(theme: Theme) {
    return this.http.put(this.url1, theme);
  }

  deleteTheme(id: number) {
    return this.http.delete(this.url1 + '/' + id);
  }

}
