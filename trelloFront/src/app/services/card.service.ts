import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CardService {

  constructor(
    private http:Http
  ) { }

  postNewCard(newCard):Observable<any>{
    return this.http.post('http://localhost:3000/api/cards/', newCard)
    .map((r:Response)=>r.json())
    .map(res=>res)
    .catch(error => {
      console.log(error);
      return Observable.throw(error);
   })
  }

}
