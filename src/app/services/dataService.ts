import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import { map } from 'rxjs/operators';



@Injectable()
export class ListService {
  //services to fetch data from api
    url:string="http://5.39.81.163:3000/";

  constructor(private http:Http) { }
    fetchList(){			
  	let headers = new Headers();
  	headers.append('Content-Type','application/json');
  	return this.http.get(this.url+'api/contract/listed').pipe(map(res => res.json()));
  }

}
