import {Component, OnInit} from '@angular/core';
import {ThemeN} from '../../../models/themen';
import {ThemeService} from '../../../services/theme.service';
import {Router} from "@angular/router";

@Component({
  selector: 'admin-app-theme-nav-bar',
  templateUrl: './theme-nav-bar.component.html',
  styleUrls: ['./theme-nav-bar.component.css'],
  providers: [ThemeService]
})
export class ThemeNavBarComponent implements OnInit {

  themesn: ThemeN[];
  href: string = '';

  constructor(private themeService: ThemeService, private router: Router) {
  }

  goTheme(id: number) {
    this.href = this.router.url;
    console.log(this.href);
    this.href = this.href.substr(0, 14);
    this.router.navigate([this.href + '/' + id]);
  }

  ngOnInit() {
    this.loadThemesn();
  }

  loadThemesn() {
    this.themeService.getThemesn().subscribe((data: ThemeN[]) => {this.themesn = data; });
  }

  addThemen() {

  }

}
