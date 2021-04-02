import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface BoredState {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;
}

export function createInitialState(): BoredState {
  return {
    activity: '',
    accessibility: 0,
    key: '',
    link: '',
    participants: 0,
    price: 0,
    type: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'bored' })
export class BoredStore extends Store<BoredState> {

  constructor() {
    super(createInitialState());
  }

}
