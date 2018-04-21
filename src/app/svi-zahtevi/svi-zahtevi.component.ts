import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationServiceService } from '../registation/registration-service.service';

@Component({
  selector: 'app-svi-zahtevi',
  templateUrl: './svi-zahtevi.component.html',
  styleUrls: ['./svi-zahtevi.component.css']
})
export class SviZahteviComponent implements OnInit {

  korisnikID: number;
  zahtevi: any;
  ponude: any;
  taskID: string;
  aktivanZahtev: any;

  dodatneInfo: string;
  rokZaPonude: string;

  constructor(private router: Router, private route: ActivatedRoute, private registrationService: RegistrationServiceService) { }

  ngOnInit() {
    this.aktivanZahtev = {};
    this.dodatneInfo = "";
    this.rokZaPonude = "";
    this.korisnikID = parseInt(this.route.snapshot.paramMap.get('korisnikID'));
    this.registrationService.getAllUserRequests(this.korisnikID).subscribe(data=>{
      this.zahtevi = data;
    })
  }

  getPonude(zahtevId: number) {
    console.log('Zahtev id: '+ zahtevId);
    this.registrationService.getAllRequestOffers(zahtevId).subscribe(data=>{
      this.ponude = data.ponude;
      this.taskID = data.taskID;
    })
  }

  odaberiPonudu(ponuda) {
    this.registrationService.odaberiPonudu(ponuda, this.taskID).subscribe(data=>{
      alert('Ponuda preliminarno odabrana!');
    })
  }

  traziDodatneInfo(ponuda, zahtevZaPojasnjenje) {
    this.registrationService.traziDodatneInfo(ponuda, zahtevZaPojasnjenje,  this.taskID).subscribe(data=>{
      alert('Trazene dodatne informacije!');
    })
  }

  ponoviPostupak(noviRok) {
    console.log(noviRok);
    this.registrationService.ponoviPostupak(this.aktivanZahtev.id, noviRok,  this.taskID).subscribe(data=>{
      alert('Ponovi postupak!');
    })
  }

  otkaziZahtev() {
    this.registrationService.otkaziZahtev(this.aktivanZahtev.id,  this.taskID).subscribe(data=>{
      alert('Otkazan zahtev!');
    })
  }

}
