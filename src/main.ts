// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter } from '@angular/router'; // Importe provideRouter
import { routes } from './app/app.routes'; // Importe o seu arquivo de rotas

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(routes) // Adicione provideRouter com as suas rotas
  ]
}).catch(err => console.error(err));







