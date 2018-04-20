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

  constructor(private router: Router, private route: ActivatedRoute, private registrationService: RegistrationServiceService) { }

  ngOnInit() {
    this.korisnikID = parseInt(this.route.snapshot.paramMap.get('korisnikID'));
    this.registrationService.getAllUserRequests(this.korisnikID).subscribe(data=>{
      this.zahtevi = data;
    })
  }

  getPonude(zahtevId: number) {
    console.log('Zahtev id: '+ zahtevId);
    this.registrationService.getAllRequestOffers(zahtevId).subscribe(data=>{
      this.ponude = data;
    })
  }

}
