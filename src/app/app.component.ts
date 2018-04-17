import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{

  public omoguci;

  ngOnInit(){
    this.omoguci = true;
  }

  

  // enable(korisnik){
  //   alert(":::")
  //   if(korisnik == "firma"){
  //     alert("!!!!!!")
  //     this.omoguci=false;
  //   }else{
  //     this.omoguci=true;
  //   }
  // }

  // korisnici = [
  //   {value: 'firma', viewValue: 'Firma'},
  //   {value: 'korisnik', viewValue: 'Korisnik'}
  // ];

}
