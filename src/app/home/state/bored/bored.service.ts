import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { BoredStore, BoredState } from './bored.store';

@Injectable({ providedIn: 'root' })
export class BoredService {

  private endpoint: string = 'http://www.boredapi.com/api/activity/';

  constructor(private boredStore: BoredStore, private http: HttpClient) {
  }

  get() {
    return this.http.get<BoredState>(this.endpoint)
     .pipe(
      ).subscribe(bored => 
        {
          console.log(bored);
          this.boredStore.update(bored);
        });
  }

}
