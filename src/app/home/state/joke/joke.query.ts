import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { JokeStore, JokeState } from './joke.store';

@Injectable({ providedIn: 'root' })
export class JokeQuery extends Query<JokeState> {
  selectJoke$ = this.select();

  constructor(protected store: JokeStore) {
    super(store);
  }

}
