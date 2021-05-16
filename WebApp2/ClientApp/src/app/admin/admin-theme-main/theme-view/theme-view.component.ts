import {Component, DoCheck, OnInit} from '@angular/core';
import {ThemeService} from '../../../services/theme.service';
import {CurthemeService} from '../service/curtheme.service';
import {Theme} from '../../../models/theme';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'admin-app-theme-view',
  templateUrl: './theme-view.component.html',
  styleUrls: ['theme-view.component.css'],
  providers: [ThemeService]
})
export class ThemeViewComponent implements OnInit, DoCheck {
  theme: Theme;
  idTheme: number;
  constructor(private themeService: ThemeService, private curtheme: CurthemeService, private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.idTheme = Number.parseInt(this.activeRoute.snapshot.params['id'], 10);
    this.loadTheme(this.idTheme);
  }

  loadTheme(id: number) {
    this.themeService.getTheme(id).subscribe((data: Theme) => {
      this.theme = data;
    });
  }

  ngDoCheck() {
    if (this.curtheme.isUpdate) {
      this.idTheme = this.curtheme.getCurTheme();
      this.loadTheme(this.idTheme);
      this.curtheme.isUpdate = false;
    }
  }

}
