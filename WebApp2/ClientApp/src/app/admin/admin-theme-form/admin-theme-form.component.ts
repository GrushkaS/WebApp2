import {Component, Input} from '@angular/core';
import {Theme} from '../../models/theme';

@Component({
  selector: 'admin-app-theme-form',
  templateUrl: './admin-theme-form.component.html'
})
export class AdminThemeFormComponent {
  @Input() theme: Theme;
}
