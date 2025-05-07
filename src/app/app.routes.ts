import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewsDetailComponent } from './news-detail/news-detail.component'; // Importe seu componente de detalhes
import { CreateNewsComponent } from './create-news/create-news.component'; // Importe seu componente de cadastro
import { NewsListComponent } from './news-list.component';

export const routes: Routes = [
  { path: '', component: NewsListComponent  }, // Rota para a página principal (listagem)
  { path: 'detail/:id', component: NewsDetailComponent }, // Rota para a página de detalhes, com um parâmetro 'id'
  { path: 'create', component: CreateNewsComponent }, // Rota para a página de cadastro
];
