import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router'
import { RegistationComponent } from './registation/registation.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { LoginComponent } from './login/login.component';
import { FirmRegistrationComponent } from './firm-registration/firm-registration.component';
import { ZahtevZaNabavkuComponent } from './zahtev-za-nabavku/zahtev-za-nabavku.component';
import { PonudaComponent } from './ponuda/ponuda.component';
import { SviZahteviComponent } from './svi-zahtevi/svi-zahtevi.component';
import { DodInfoComponent } from './dod-info/dod-info.component';
import { GetTasksComponent } from './get-tasks/get-tasks.component';

const routes : Routes = [
  { path: 'registration', component: RegistationComponent},
  { path: 'firstPage/:korisnikID', component:FirstPageComponent},
  { path: 'login', component:LoginComponent},
  { path: 'zahtevZaNabavku/:korisnikID', component:ZahtevZaNabavkuComponent},
  { path: 'ponuda/:korisnikID', component:PonudaComponent},
  { path: 'sviZahtevi/:korisnikID', component:SviZahteviComponent},
  { path: 'dodatneInfo/:korisnikID', component:DodInfoComponent},
  { path: 'sviTaskovi/:korisnikID', component:GetTasksComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
export const routingComponents = [RegistationComponent, FirstPageComponent, LoginComponent,
                                 FirmRegistrationComponent, ZahtevZaNabavkuComponent,
                                 PonudaComponent, SviZahteviComponent, DodInfoComponent,
                                  GetTasksComponent]