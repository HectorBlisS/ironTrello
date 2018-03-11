import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class ListService {

  constructor(
    private http:Http
  ) { }
  url:"http://localhost:3000/api/lists/"

  getLists():Observable<any>{
    return this.http.get('http://localhost:3000/api/lists/')
    .map((r:Response)=>r.json())
    .map(res=>res)
    .catch(error => {
      console.log(error);
      return Observable.throw(error);
   })
  }

  postNewList(newList):Observable<any>{
    return this.http.post('http://localhost:3000/api/lists/', newList)
    .map((r:Response)=>r.json())
    .map(res=>res)
    .catch(error => {
      console.log(error);
      return Observable.throw(error);
   })
  }

  updateList(list){
    return this.http.patch('http://localhost:3000/api/lists/'+list._id, list)
    .map((r:Response)=>r.json())
    .map(res=>res)
    .catch(error => {
      console.log(error);
      return Observable.throw(error);
   })
  }

  deleteList(list){
    return this.http.delete('http://localhost:3000/api/lists/'+list._id)
    .map((r:Response)=>r.json())
    .map(res=>res)
    .catch(error => {
      console.log(error);
      return Observable.throw(error);
   })
  }

}
