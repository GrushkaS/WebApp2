import {Injectable, OnInit} from '@angular/core';
import {DataService} from './data.service';
import {Counter} from '../models/counter';
import {Post} from '../models/post';

@Injectable()
export class DataAnalysis implements OnInit {
  public counters: Counter[];
  public counter: Counter;
  public id = 0;

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
