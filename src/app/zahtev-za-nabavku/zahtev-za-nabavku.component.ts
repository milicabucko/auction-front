import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationServiceService } from '../registation/registration-service.service';

@Component({
  selector: 'app-zahtev-za-nabavku',
  templateUrl: './zahtev-za-nabavku.component.html',
  styleUrls: ['./zahtev-za-nabavku.component.css']
})
export class ZahtevZaNabavkuComponent implements OnInit {

  korisnikID: number;
  taskId: number;

  zahtevZaNabavkuForm: FormGroup;

  kategorije: any;

  constructor(private router: Router, private route: ActivatedRoute, private registrationService: RegistrationServiceService) { } 

  ngOnInit() {

    this.korisnikID = parseInt(this.route.snapshot.paramMap.get('korisnikID'));

    this.zahtevZaNabavkuForm = new FormGroup({
      kategorija: new FormControl('', Validators.required),
      opis : new FormControl('', Validators.required),
      maxVrednost : new FormControl(0, Validators.required),
      rokZaPonude : new FormControl('', Validators.required),
      maxBrojPonuda : new FormControl(0, Validators.required),
      rokZaNabavku : new FormControl('', Validators.required)
    });

    this.registrationService.activateProcessAukcija().subscribe(data=> {
        this.taskId = data.id;
        console.log("data" + data.id);
      }
    )

    this.registrationService.getkategorijePosla().subscribe(data=>{
      this.kategorije = data;
    })

  }

  save() {
    this.registrationService.saveZahtevZaNabavku(this.zahtevZaNabavkuForm.value, this.korisnikID, this.taskId).subscribe(data=>{
      alert('Sacuvan zahtev');
    })
  }

}
