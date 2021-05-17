import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ThemeService} from '../../services/theme.service';
import {Theme} from '../../models/theme';

@Component({
  selector: 'admin-app-theme-edit',
  templateUrl: './admin-theme-edit.component.html',
  providers: [ThemeService]
})
export class AdminThemeEditComponent implements OnInit {
  @Input()
  id: number;
  theme: Theme;

  constructor(private themeService: ThemeService, private router: Router, activeRoute: ActivatedRoute) {
    this.id = Number.parseInt(activeRoute.snapshot.params['id'], 10);
  }

  ngOnInit() {
    if (this.id) {
      this.themeService.getTheme(this.id)
        .subscribe((data: Theme) => {
          this.theme = data;
        });
    }
  }

  save() {
    this.themeService.updateTheme(this.theme).subscribe(data => this.router.navigateByUrl('/admin/themes/1'));
  }


}
