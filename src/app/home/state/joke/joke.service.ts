import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { JokeStore, JokeState } from './joke.store';

@Injectable({ providedIn: 'root' })
export class JokeService {

  private endpoint: string = 'https://api.chucknorris.io/jokes/random';

  constructor(private jokeStore: JokeStore, private http: HttpClient) {
  }

  get() {
    return this.http.get<JokeState>(this.endpoint)
     .pipe(
      ).subscribe(joke => 
        {
          console.log(joke);
          this.jokeStore.update(joke);
        });
  }

}
