import { Component } from '@angular/core';
import {DataAnalysis} from '../../services/data.analysis';

@Component({
  selector: 'app-home-rec',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent {
  constructor(dataAnalysis: DataAnalysis) {
  }
}
