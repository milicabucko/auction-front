import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationServiceService } from './registration-service.service';
import { Task } from './task';
import { Firma } from './firma';

@Component({
  selector: 'app-registation',
  templateUrl: './registation.component.html',
  styleUrls: ['./registation.component.css']
})
export class RegistationComponent implements OnInit {


  firmaJe: boolean = false;
  registrationForm : FormGroup;
  firmaForm : FormGroup;
  taskId: string;
  firmaTaskId: string;
  kategorije: any;

  aktivnaStranica: String;

  constructor(private registrationService : RegistrationServiceService) { }

  ngOnInit() {

    this.aktivnaStranica = "korisnik";
    
    this.registrationForm = new FormGroup({
      ime: new FormControl('Milica',[Validators.required]),
      prezime: new FormControl('Bucko',[Validators.required]),
      email: new FormControl('mb@gmail.com',[Validators.required, Validators.email]),
      korisnickoIme: new FormControl('m', [Validators.required]),
      lozinka: new FormControl('m', [Validators.required]),
      mestoStanovanja: new FormControl('Backa P', Validators.required),
      adresa: new FormControl('ILR', [Validators.required]),
      postanskiBroj: new FormControl('21400', [Validators.required]),
      tipKorisnika: new FormControl('', [Validators.required])
    })

    this.firmaForm = new FormGroup({
      kategorija: new FormControl('',[Validators.required]),
      udaljenost: new FormControl('10',[Validators.required]),
      imeFirme: new FormControl('firma M',[Validators.required])
    });

    this.registrationService.activateProcess().subscribe(
      data=> {
        this.taskId = data.id;
        console.log("data" + data.id);
      }
    )

    this.registrationService.kategorijeFirme().subscribe(data => { 
     this.kategorije = data;
    })
  }

  atp() {
    this.registrationService.atp().subscribe(data=>{

    })
  }

  save() {
    this.registrationService.saveKorisnik(this.registrationForm.value, this.taskId).subscribe(data=>{
      if(data.korisnik.tipKorisnika  === "firma"){
        alert("firma!");
        this.firmaTaskId = data.taskId;
        this.aktivnaStranica = "firma";
      }
    })
  }

  saveFirma() {
    this.registrationService.saveKorisnikFirma(this.registrationForm.value, this.firmaForm.value, this.firmaTaskId).subscribe(data=>{
      if(data.korisnik.tipKorisnika  === "firma"){
        alert("firma sacuvana! Kategorija firme je: " + data.korisnik.kategorija);
        this.aktivnaStranica = "firma";
      }
    })
  }

  korisnici = [
    {value: 'firma', viewValue: 'Firma'},
    {value: 'korisnik', viewValue: 'Korisnik'}
  ];

}
