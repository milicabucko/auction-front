import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';


@Injectable()
export class RegistrationServiceService {

  private url = `${environment}`;

  constructor(private http : Http) { }

  // registration(korisnik:any): Observable<>{
  //   return this.http.post(this.url + "/registration/" ).map(res=>res.json());
  // }

}
