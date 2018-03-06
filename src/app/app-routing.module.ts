import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router'
import { RegistationComponent } from './registation/registation.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { LoginComponent } from './login/login.component';
import { FirmRegistrationComponent } from './firm-registration/firm-registration.component';

const routes : Routes = [
  { path: 'registration', component: RegistationComponent},
  { path: 'firstPage', component:FirstPageComponent},
  { path: 'login', component:LoginComponent},
  { path: 'firmRegistration' , component:FirmRegistrationComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
export const routingComponents = [RegistationComponent, FirstPageComponent, LoginComponent,
                                 FirmRegistrationComponent]