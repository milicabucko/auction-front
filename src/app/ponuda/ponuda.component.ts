import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationServiceService } from '../registation/registration-service.service';

@Component({
  selector: 'app-ponuda',
  templateUrl: './ponuda.component.html',
  styleUrls: ['./ponuda.component.css']
})
export class PonudaComponent implements OnInit {

  korisnikID: number;
  taskId: number;

  ponudaForm: FormGroup;

  kategorije: any;

  activeTask: string;
  activeTasks: any;

  constructor(private router: Router, private route: ActivatedRoute, private registrationService: RegistrationServiceService) { } 

  ngOnInit() {

    this.activeTask = "Nema aktivnog";

    this.korisnikID = parseInt(this.route.snapshot.paramMap.get('korisnikID'));

    this.registrationService.getAllActiveUserTasks(this.korisnikID).subscribe(data=>{
      this.activeTasks = data;
    })

    this.ponudaForm = new FormGroup({
      cena: new FormControl('', Validators.required),
      rokZaIzvrsavanje : new FormControl('', Validators.required),
      status : new FormControl('', Validators.required)
    });

  }

  save() {
    this.registrationService.savePonuda(this.ponudaForm.value, this.korisnikID, this.taskId).subscribe(data=>{
      alert('Sacuvan izbor (ponuda)');
    })
  }

}
