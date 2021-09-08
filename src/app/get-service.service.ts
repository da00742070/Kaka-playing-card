import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import 'rxjs/Rx';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {
  constructor(private http: HttpClient) { }
  
  GetCard(): Observable<any> {
    return this.http.get(environment.CartURL + '/new/shuffle/?deck_count=1')
          .map(this.extractData)
  }
  GetDrawDeck<Any>(DeckID): Observable<any> {
   if (DeckID === undefined) {
     alert("Firstly shuffled deck and click to Rest Deck button.")
   }
   return this.http.get(environment.CartURL +DeckID+ '/draw/?count=1')

  } 
  private extractData(res: Response) {
    let body = res;
    return body;
  }
}
