import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationServiceService } from '../registation/registration-service.service';

@Component({
  selector: 'app-dod-info',
  templateUrl: './dod-info.component.html',
  styleUrls: ['./dod-info.component.css']
})
export class DodInfoComponent implements OnInit {

  korisnikID: number;

  activeTask: string;
  activeTasks: any;

  dodatneInfoForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private registrationService: RegistrationServiceService) { } 

  ngOnInit() {

    this.activeTask = "Nema aktivnog";

    this.korisnikID = parseInt(this.route.snapshot.paramMap.get('korisnikID'));

    this.registrationService.getAllActiveUserDodatneInfoTasks(this.korisnikID).subscribe(data=>{
      this.activeTasks = data;
    })

    this.dodatneInfoForm = new FormGroup({
      dodatneInfo : new FormControl('', Validators.required)
    });

  }

  save() {
    this.registrationService.saveDodatneInfo(this.dodatneInfoForm.value.dodatneInfo, this.korisnikID, this.activeTask).subscribe(data=>{
      alert('Poslate dodatne informacije');
    })
  }

}
