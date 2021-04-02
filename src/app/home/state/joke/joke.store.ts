import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface JokeState {
  value: string;
  created_at?: Date;
}

export function createInitialState(): JokeState {
  return {
    value: null,
    created_at: null
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'joke' })
export class JokeStore extends Store<JokeState> {

  constructor() {
    super(createInitialState());
  }

}
