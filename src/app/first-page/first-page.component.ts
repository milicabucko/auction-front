import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationServiceService } from '../registation/registration-service.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  korisnikID: number;
  korisnik: any;

  constructor(private router: Router, private route: ActivatedRoute, private registrationService: RegistrationServiceService) { }

  ngOnInit() {
    this.korisnikID = parseInt(this.route.snapshot.paramMap.get('korisnikID'));

    this.registrationService.getActiveUser(this.korisnikID).subscribe(data=>{
      console.log(data);
      this.korisnik = data;
    })
  }

  kreirajZahtev() {
    this.router.navigate(['/zahtevZaNabavku', this.korisnikID]);
  }
  posaljiPonudu() {
    this.router.navigate(['/ponuda', this.korisnikID]);
  }
  sviZahtevi() {
    this.router.navigate(['/sviZahtevi', this.korisnikID]);
  }
  posaljiDodatneInfo() {
    this.router.navigate(['/dodatneInfo', this.korisnikID]);
  }
  sviTaskovi() {
    this.router.navigate(['/sviTaskovi', this.korisnikID]);
  }

}
