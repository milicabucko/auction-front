import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { Task } from './task';
import { Firma } from './firma';


@Injectable()
export class RegistrationServiceService {

  private url = "http://localhost:8081";

  constructor(private http : Http) { }

  saveKorisnik(korisnik:any, taskId:string){
    return this.http.post(this.url + "/registration/" + taskId, korisnik).map(res=>res.json());
  }

  saveKorisnikFirma(korisnik:any, firma:any, taskId:string){
    korisnik.imeFirme = firma.imeFirme;
    korisnik.udaljenost = firma.udaljenost;
    korisnik.kategorija = firma.kategorija;
    return this.http.post(this.url + "/registration/firma/" + taskId, korisnik).map(res=>res.json());
  }

  activateProcess(){
    return this.http.get(this.url + "/registration/activateProcess").map(res=>res.json());
  }

  registrationFirm(firma: Firma, taskId:string):Observable<Task>{
    return this.http.post(this.url + "/registration/firm" + taskId, firma).map(res=>res.json());
  }

  atp() {
    return this.http.get(this.url + "/registration/atp").map(res=>res.json());
  }
  

  kategorijeFirme() {
    return this.http.get(this.url + "/registration/kategorije").map(res =>res.json());
  }

  activateProcessAukcija(){
    return this.http.get(this.url + "/aukcija/activateProcess").map(res=>res.json());
  }

  saveZahtevZaNabavku(zahtev: any, korisnikID: number, taskId) {
    return this.http.post(this.url + "/aukcija/zahtevZaNabavku/save/" + taskId + "/" + korisnikID, zahtev).map(res=>res.json());
  }

  getkategorijePosla() {
    return this.http.get(this.url + "/aukcija/kategorijePosla").map(res =>res.json());
  }

  savePonuda(ponuda: any, korisnikID, taskId) {
    return this.http.post(this.url + "/ponude/sacuvajPonudu/" + korisnikID + "/" + taskId, ponuda).map(res=>res.json());
  }

  getAllActiveUserTasks(korisnikID) {
    return this.http.get(this.url + "/ponude/getAllActiveUserTasks/" + korisnikID).map(res =>res.json());
  }

  getAllUserRequests(korisnikID) {
    return this.http.get(this.url + "/ponude/ponude/getSviKorisnikoviZahtevi/"+korisnikID).map(res =>res.json());
  }

  getAllRequestOffers(zahtevId: number) {
    return this.http.get(this.url + "/ponude/zahtev/getSvePonude/" + zahtevId).map(res =>res.json());
  }
  

}
