import { Routes } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { etudiantsComponent } from './pages/etudiants/etudiants.component';
import { CoursComponent } from './pages/cours/cours.component';
import { ClassesComponent } from './pages/classes/classes.component';

export const routes: Routes = [];
@NgModule({
  declarations: [
    LoginComponent,
    etudiantsComponent,
    CoursComponent,
    ClassesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // PagesModule,
    BrowserAnimationsModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule { }
