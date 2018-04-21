import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { RegistrationServiceService } from '../registation/registration-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private registrationService: RegistrationServiceService) { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      korisnickoIme: new FormControl('',[Validators.required]),
      lozinka: new FormControl('',[Validators.required])
    });
  }

  login(){
    this.registrationService.login(this.loginForm.value.korisnickoIme, this.loginForm.value.lozinka).subscribe(data=>{
      if (data.id!=0){
        this.router.navigate(['/firstPage', data.id]);
      }
      else {
        alert("Pogresno korisnicko ime ili lozinka!");
      }
    })
    

  }
}
