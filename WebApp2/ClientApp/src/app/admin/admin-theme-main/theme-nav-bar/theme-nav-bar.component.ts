import {Component, OnInit} from '@angular/core';
import {ThemeN} from '../../../models/themen';
import {ThemeService} from '../../../services/theme.service';

@Component({
  selector: 'admin-app-theme-nav-bar',
  templateUrl: './theme-nav-bar.component.html',
  styleUrls: ['./theme-nav-bar.component.css'],
  providers: [ThemeService]
})
export class ThemeNavBarComponent implements OnInit {

  themesn: ThemeN[];

  constructor(private themeService: ThemeService) {
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
