import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { BoredService } from '../state/bored/bored.service';
import { BoredQuery } from '../state/bored/bored.query';

import { JokeQuery } from '../state/joke/joke.query';
import { JokeService } from '../state/joke/joke.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@Injectable({ providedIn: 'root' })
export class HomeComponent implements OnInit {

  value: string;
  date?: Date;
  activity: string;

  constructor(
    private service: JokeService,
    private jokeQuery: JokeQuery,
    private boredService: BoredService,
    private boredQuery: BoredQuery

    ) { }

  ngOnInit(): void {
    
    this.jokeQuery.selectJoke$.subscribe(tap => 
      {
        this.value = tap.value;
        this.date = tap.created_at;
        console.log(tap);
    });
    this.boredQuery.selectBored$.subscribe(tap =>
      {
        this.activity = tap.activity;
      })
    this.service.get();
    this.boredService.get();
  }

}
