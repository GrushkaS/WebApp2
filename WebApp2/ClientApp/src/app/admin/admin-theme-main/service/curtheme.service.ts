import {Injectable} from '@angular/core';

@Injectable()
export class CurthemeService {
  private curTitle: number = 0;
  private curTheme: number = 0;

  public isUpdate: boolean = false;

  getCurTitle() {
    return this.curTitle;
  }

  getCurTheme() {
    return this.curTheme;
  }

  setCurTitle(id: number) {
    this.curTitle = id;
  }

  setCurTheme(id: number) {
    this.curTheme = id;
  }
}
