import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ThemeService} from '../../services/theme.service';
import {Theme} from '../../models/theme';


@Component({
  selector: 'admin-app-theme-add',
  templateUrl: './admin-theme-add.component.html',
  providers: [ThemeService, DatePipe]
})
export class AdminThemeAddComponent implements OnInit {
  theme: Theme = new Theme();
  date: Date;

  constructor(private themeService: ThemeService, private router: Router, public datepipe: DatePipe) {
  }

  ngOnInit() {
  }

  save() {
    this.date = new Date();
    this.theme.date = this.datepipe.transform(this.date, 'dd.MM.yyyy');
    this.themeService.createTheme(this.theme).subscribe(data => this.router.navigateByUrl('/admin/themes/1'));

  }

}
