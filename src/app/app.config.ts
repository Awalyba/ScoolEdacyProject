import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { Routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(Routes), provideClientHydration()]
};

const routes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
