import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {ThemeService} from '../../../services/theme.service';
import {Theme} from '../../../models/theme';
import {ActivatedRoute, Router} from '@angular/router';
import {CurthemeService} from '../service/currenttheme.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list-view.component.html',
  styleUrls: ['theme-list-view.component.css'],
  providers: [ThemeService]
})
export class ThemeListViewComponent implements OnInit, DoCheck {
  themes: Theme[];
  theme: Theme;
  idTitle: number;
  isSelected: boolean = false;

  constructor(private themeService: ThemeService,
              private activeRoute: ActivatedRoute,
              private router: Router,
              private curtheme: CurthemeService) {
  }

  ngOnInit() {
    this.idTitle = 1;
    this.loadThemes(this.idTitle);
  }

  loadThemes(id: number) {
    this.themeService.getThemes(id).subscribe((data: Theme[]) => {
      this.themes = data;
      this.theme = this.themes[0];
      console.log('Loading list themes: ' + this.themes);
    });
  }

  ngDoCheck() {
    if (this.curtheme.isUpdate) {
      this.idTitle = this.curtheme.getCurTitle();
      this.loadThemes(this.idTitle);
      this.curtheme.isUpdate = false;
    }

    if (this.isSelected) {
      this.themes.forEach(element => {
        if (element.id === this.curtheme.getCurTheme()) {
          console.log('Element = ' + element.id + element.title);
          this.theme = element;
        }
      });
      // this.theme = this.themes[this.curtheme.getCurTheme() - 1];
      this.isSelected = false;
    }

  }

  goTheme(id: number) {
    this.curtheme.setCurTheme(id);
    this.isSelected = true;
    console.log('Cur title = ' + this.curtheme.getCurTitle() + 'Cur theme = ' + this.curtheme.getCurTheme());
  }

  deleteTheme(id: number) {
    this.themeService.deleteTheme(id).subscribe(data => this.loadThemes(this.idTitle));
    this.curtheme.setCurTheme(1);
  }

}
