import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ClassesComponent } from './classes/classes.component';
import { RouterModule, Routes } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { etudiantsComponent} from './etudiants/etudiants.component';
import { CoursComponent } from './cours/cours.component';


const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},

{path: '', redirectTo: 'login', pathMatch: 'full'},
{
  path: 'classes',
  component: ClassesComponent
},

]

@NgModule({
  declarations: [
    LoginComponent,
    CoursComponent,
    ClassesComponent,
    EtudiantsComponent,
  ],

  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    LoginComponent,
    ClassesComponent,
    CoursComponent,
    etudiantsComponent,
  ]
})
export class PagesModule { }
