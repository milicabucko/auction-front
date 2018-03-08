import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { Task } from './task';


@Injectable()
export class RegistrationServiceService {

  private url = "http://localhost:8081";

  constructor(private http : Http) { }

   registration(korisnik:any, taskId:string): Observable<Task>{
     return this.http.post(this.url + "/registration/" + taskId, korisnik).map(res=>res.json());
   }

  activateProcess(){
    return this.http.get(this.url + "/registration/activateProcess").map(res=>res.json());
  }

}
