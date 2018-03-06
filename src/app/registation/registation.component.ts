import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationServiceService } from './registration-service.service';

@Component({
  selector: 'app-registation',
  templateUrl: './registation.component.html',
  styleUrls: ['./registation.component.css']
})
export class RegistationComponent implements OnInit {


  firma: boolean = false;
  registrationForm : FormGroup;
  registrationFirm : FormGroup;
  registrationFirmForm : boolean = false;


  constructor(private registrationService : RegistrationServiceService) { }

  public omoguci;

  ngOnInit(){
    this.omoguci = true;
    this.registrationForm = new FormGroup({
      ime: new FormControl('Maksi',[Validators.required]),
      prezime: new FormControl('Bucko',[Validators.required]),
      email: new FormControl('maksi@gmail.com',[Validators.required, Validators.email]),
      korisnickoIme: new FormControl('maksi', [Validators.required]),
      lozinka: new FormControl('maksi', [Validators.required]),
      mestoStanovanja: new FormControl('Backa P', Validators.required),
      adresa: new FormControl('ILR', [Validators.required]),
      postanskiBroj: new FormControl('21400', [Validators.required]),
      tipKorisnika: new FormControl('', [Validators.required])

    })
  }

  izaberiTip(){
    if(this.registrationForm.controls['tipKorisnika'].value === 'firma'){
      this.firma = true;
    }else{
      this.firma = false;
    }
  }

  registration(){
    let value = this.registrationForm.value;
    //this.registrationService.registration(value).sub

  }

  enable(korisnik){
    alert(":::")
    if(korisnik == "firma"){
      alert("!!!!!!")
      this.omoguci=false;
    }else{
      this.omoguci=true;
    }
  }

  korisnici = [
    {value: 'firma', viewValue: 'Firma'},
    {value: 'korisnik', viewValue: 'Korisnik'}
  ];

}
