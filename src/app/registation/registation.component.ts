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
  registrationFirm : FormGroup;
  registrationFirmForm : boolean = false;
  taskId: string;
  task: Task;
  kategorije = [];   
 
  firma : Firma;

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

    this.registrationService.activateProcess().subscribe(
      data=> {
        this.taskId = data.id;
        console.log("data" + data.id);
      }
    )

    this.registrationService.kategorijeFirme()
   .subscribe(data => {
     console.log("Data value" + data.value + "ime " + data.ime + "data " + data + "id " + data.id);  
     this.kategorije=data;
   
   })
  }

  izaberiTip(){
    if(this.registrationForm.controls['tipKorisnika'].value === 'firma'){
      this.firmaJe = true;
    }else{
      this.firmaJe = false;
    }
  }

   registration(){
     let value = this.registrationForm.value;
     this.registrationService.registration(value,this.taskId)
            .subscribe(data=>{
                console.log(data.ime);
                this.task = data;
                if(data.ime === "firma"){
                  this.registrationFirm = new FormGroup({
                    kategorija : new FormControl('',[Validators.required]),
                    udaljenost : new FormControl('10',[Validators.required]),
                    ime : new FormControl('firma M',[Validators.required])
                  });

                console.log("kategorije " + this.kategorije);
						    this.registrationFirmForm = true;
                }

            })

   }

   registrationFirmButton(){
    let value = this.registrationFirm.value;
    this.firma = new Firma(value.ime, value.udaljenost, value.kategorija, value.korisnickoIme);
    this.registrationService.registrationFirm(this.firma, this.task.taskId).subscribe
            (data=>{console.log("firma " + data)})

   }

   izaberiKategoriju(){
    this.registrationService.kategorijeFirme()
    .subscribe(data => {
      console.log("Data " + data.ime);  
      this.kategorije=data;
    
    })
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
