import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {ThemeService} from '../../../services/theme.service';
import {Theme} from '../../../models/theme';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'admin-app-theme-list',
  templateUrl: './theme-list-view.component.html',
  styleUrls: ['theme-list-view.component.css'],
  providers: [ThemeService]
})
export class ThemeListViewComponent implements OnInit, DoCheck {
  themes: Theme[];
  idTitle: string;
  @Input()
  idTitle2: number;

  constructor(private themeService: ThemeService, private activeRoute: ActivatedRoute, private router: Router) {
    this.router.events.subscribe((val) => {
      this.idTitle = this.activeRoute.snapshot.params['id'];
      this.loadThemes(Number.parseInt(this.idTitle, 10));
    });
  }

  ngOnInit() {
    this.idTitle = this.activeRoute.snapshot.params['id'];
    this.loadThemes(Number.parseInt(this.idTitle, 10));
  }

  loadThemes(id: number) {
    this.themeService.getThemes(id).subscribe((data: Theme[]) => {this.themes = data; });
  }

  ngDoCheck() {
  }

}
