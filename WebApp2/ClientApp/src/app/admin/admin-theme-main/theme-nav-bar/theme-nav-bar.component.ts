import {Component, OnInit} from '@angular/core';
import {ThemeN} from '../../../models/themen';
import {ThemeService} from '../../../services/theme.service';
import {Router} from '@angular/router';
import {CurthemeService} from '../service/curtheme.service';
import {getLocaleDayPeriods} from "@angular/common";

@Component({
  selector: 'admin-app-theme-nav-bar',
  templateUrl: './theme-nav-bar.component.html',
  styleUrls: ['./theme-nav-bar.component.css'],
  providers: [ThemeService]
})
export class ThemeNavBarComponent implements OnInit {

  themesn: ThemeN[];
  themen: ThemeN;
  href: string = '';
  isAdding: boolean = false;

  constructor(private themeService: ThemeService, private router: Router, private  curtheme: CurthemeService) {
    this.themen = new ThemeN();
  }

  goTheme(id: number) {
    this.href = this.router.url.substr(0, 14);
    this.router.navigate([this.href + '/' + id]);
    this.curtheme.setCurTitle(id);
    this.curtheme.isUpdate = true;
  }

  ngOnInit() {
    this.loadThemesn();
  }

  loadThemesn() {
    this.themeService.getThemesn().subscribe((data: ThemeN[]) => {
      this.themesn = data;
    });
  }

  addThemeN() {
    this.isAdding = true;
  }

  saveThemeN() {
    console.log('Title themen: ' + this.themen.title);
    this.themeService.createThemen(this.themen).subscribe(data => this.loadThemesn());
    this.isAdding = false;
  }

}
