import {Component, OnInit} from '@angular/core';
import {DataAnalysis} from '../../services/data.analysis';
import {DataService} from '../../services/data.service';
import {Post} from '../../models/post';

@Component({
  selector: 'app-home-rec',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
  Posts: Post[];

  maxIdPost: number[];
  isEmpty = true;

  constructor(private dataAnalysis: DataAnalysis, private dataService: DataService) {
  }
  ngOnInit() {
    this.maxIdPost = this.dataAnalysis.getMostViewed();
    this.Posts = [];
    this.dataService.getPost(this.maxIdPost[0]).subscribe((data: Post) => {this.Posts.push(data); } );
    this.dataService.getPost(this.maxIdPost[1]).subscribe((data: Post) => {this.Posts.push(data); } );
    this.isEmpty = false;
  }
}
