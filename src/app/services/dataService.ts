import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import { map,catch } from 'rxjs/operators';



@Injectable()
export class ListService {
  //services to fetch data from api
  constructor(private http:Http) { }
 

}
