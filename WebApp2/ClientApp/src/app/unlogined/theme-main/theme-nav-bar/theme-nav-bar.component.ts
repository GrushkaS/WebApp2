import {Component, OnInit} from '@angular/core';
import {ThemeN} from '../../../models/themen';
import {ThemeService} from '../../../services/theme.service';
import {Router} from '@angular/router';
import {CurthemeService} from '../service/currenttheme.service';

@Component({
  selector: 'app-theme-nav-bar',
  templateUrl: './theme-nav-bar.component.html',
  styleUrls: ['./theme-nav-bar.component.css'],
  providers: [ThemeService]
})
export class ThemeNavBarComponent implements OnInit {

  themesn: ThemeN[];
  href: string = '';

  constructor(private themeService: ThemeService, private router: Router, private  curtheme: CurthemeService) {
  }

  goTheme(id: number) {
    this.href = this.router.url.substr(0, 8);
    this.router.navigate([this.href + '/' + id]);
    console.log('URL: ' + this.href + '/' + id);
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

  addThemen() {

  }

}
