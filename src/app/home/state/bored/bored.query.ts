import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { BoredStore, BoredState } from './bored.store';

@Injectable({ providedIn: 'root' })
export class BoredQuery extends Query<BoredState> {
  selectBored$ = this.select();

  constructor(protected store: BoredStore) {
    super(store);
  }

}
