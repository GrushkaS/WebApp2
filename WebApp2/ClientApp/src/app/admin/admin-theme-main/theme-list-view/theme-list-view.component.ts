import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {ThemeService} from '../../../services/theme.service';
import {Theme} from '../../../models/theme';
import {ActivatedRoute, Router} from '@angular/router';
import {CurthemeService} from '../service/curtheme.service';

@Component({
  selector: 'admin-app-theme-list',
  templateUrl: './theme-list-view.component.html',
  styleUrls: ['theme-list-view.component.css'],
  providers: [ThemeService]
})
export class ThemeListViewComponent implements OnInit, DoCheck {
  themes: Theme[];
  idTitle: number;

  constructor(private themeService: ThemeService,
              private activeRoute: ActivatedRoute,
              private router: Router,
              private curtheme: CurthemeService) {
  }

  ngOnInit() {
    this.idTitle = Number.parseInt(this.activeRoute.snapshot.params['id'], 10);
    this.loadThemes(this.idTitle);
  }

  loadThemes(id: number) {
    this.themeService.getThemes(id).subscribe((data: Theme[]) => {
      this.themes = data;
    });
  }

  ngDoCheck() {
    if (this.curtheme.isUpdate) {
      this.idTitle = this.curtheme.getCurTitle();
      this.loadThemes(this.idTitle);
      this.curtheme.isUpdate = false;
    }
  }

  goTheme(id: number) {
    this.curtheme.setCurTheme(id);
    this.curtheme.isUpdate = true;
  }

}
