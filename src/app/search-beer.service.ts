import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class SearchBeerService {
  private foundBeer = new BehaviorSubject([]);
  observeFoundBeer = this.foundBeer.asObservable();

  constructor(private http: HttpClient) { }

  takeDataBase(array: any[]) {
    this.foundBeer.next(array);
  }

  getBeers() {
    return this.http.get<Object>('https://api.punkapi.com/v2/beers/').pipe (
      map((res: Response) => res)
    )
  }

  searchBeers(beerId: string) {
    return this.http.get<Object>(`https://api.punkapi.com/v2/beers/${beerId}`).pipe (
      map((res: Response) => res)
    )
  }

}