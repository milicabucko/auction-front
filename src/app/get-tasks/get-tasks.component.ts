import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationServiceService } from '../registation/registration-service.service';

@Component({
  selector: 'app-get-tasks',
  templateUrl: './get-tasks.component.html',
  styleUrls: ['./get-tasks.component.css']
})
export class GetTasksComponent implements OnInit {

  korisnikID: number;

  activeTask: any;
  activeTasks: Map<String, Array<String>>;

  utvrdiTasks: any;
  oceniKlijentaTasks: any;
  oceniFirmuTasks: any;
  terminPocetkaIzvrsavanja: any;
  ocena: number;

  constructor(private router: Router, private route: ActivatedRoute, private registrationService: RegistrationServiceService) { } 

  ngOnInit() {

    this.ocena = 0;

    this.terminPocetkaIzvrsavanja = "";

    this.activeTask = {};

    this.korisnikID = parseInt(this.route.snapshot.paramMap.get('korisnikID'));

    this.registrationService.getTasks(this.korisnikID).subscribe(data=>{
      this.activeTasks = data;
      console.log(data);
    })

  }

  getActiveTasks() {
    this.utvrdiTasks = this.activeTasks["Utvrdi termin pocetka izvrsavanja"];
    this.oceniKlijentaTasks = this.activeTasks["Oceni klijenta"];
    this.oceniFirmuTasks = this.activeTasks["Oceni firmu"];
  }

  saveTPI(taskID) {
    this.registrationService.saveTerminPocetkaIzvrsavanja(this.terminPocetkaIzvrsavanja, taskID).subscribe(data=>{
      alert("Zadat termin pocetka izvrsavanja!");
    })
  }
  oceni(taskID, klijent) {
    this.registrationService.saveOcena(this.ocena, taskID, klijent).subscribe(data=>{
      alert("Ocenjen/a!");
    })
  }

}
