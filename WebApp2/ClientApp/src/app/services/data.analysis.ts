import {Injectable, OnInit} from '@angular/core';
import {DataService} from './data.service';
import {Counter} from '../models/counter';
import {Post} from '../models/post';

@Injectable()
export class DataAnalysis implements OnInit {
  public counters: Counter[];
  public counter: Counter;
  public id = 0;

  max1: number;
  max2: number;
  maxIdPost: number[];

  constructor(private dataService: DataService) {
    this.counters = [];
    this.dataService.getPosts().subscribe((data: Post[]) => {
      data.forEach(element => {
        this.counter = new Counter();
        this.counter.id = this.id;
        this.counter.idPost = element.id;
        this.counter.counter = 0;
        this.counters.push(this.counter);
      });
      console.log('DataAnalysis: ' + this.counters);
    });
  }

  ngOnInit() {
    // this.dataService.getPosts().subscribe((data: Post[]) => {
    //   data.forEach(element => {
    //     this.counter = new Counter();
    //     this.counter.id = this.id;
    //     this.counter.idPost = element.id;
    //     this.counter.counter = 0;
    //     this.counters.push(this.counter);
    //   });
    // });
  }

  addCounter(id: number) {
    this.counters.forEach(element => {
      if (element.idPost === id) {
        element.counter++;
      }
      console.log('Counter: ' + element.idPost + ' : ' + element.counter);
    });
  }

  getMostViewed() {
    this.maxIdPost = [];
    this.maxIdPost.push(this.counters[0].idPost);
    this.maxIdPost.push(this.counters[1].idPost);
    this.max1 = this.counters[0].counter;
    this.max2 = this.counters[1].counter;
    this.counters.forEach(element => {
      if (element.counter > this.max1) {
        this.max2 = this.max1;
        this.maxIdPost[1] = this.maxIdPost[0];
        this.max1 = element.counter;
        this.maxIdPost[0] = element.idPost;
      }
    });
    return this.maxIdPost;
  }

  updateCounters() {
    // this.dataService.getPosts().subscribe((data: Post[]) => {
    //   this.counter = new Counter();
    //   this.counter.id = this.id;
    //   this.counter.idPost = data[data.length].id;
    //   this.counter.counter = 0;
    //   this.counters.push(this.counter);
    // });
  }
}
