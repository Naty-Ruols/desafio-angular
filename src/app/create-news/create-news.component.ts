import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsService } from '../news.service'; // Importe o NewsService
import { Router } from '@angular/router'; // Importe o Router para redirecionamento

@Component({
  selector: 'app-create-news',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent {
  newPost = { title: '', body: '' }; // Objeto para armazenar os dados do formulário

  constructor(private newsService: NewsService, private router: Router) {}

  onSubmit() {
    if (this.newPost.title && this.newPost.body) {
      this.newsService.addPost(this.newPost).subscribe({
        next: (response) => {
          console.log('Post cadastrado com sucesso:', response);
          // Redirecione para a lista de notícias após o cadastro
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Erro ao cadastrar post:', error);
          // Exiba uma mensagem de erro para o usuário (opcional)
        }
      });
    } else {
      // Formulário inválido, exibir mensagem para o usuário (opcional)
      console.log('Formulário inválido. Título e corpo são obrigatórios.');
    }
  }
}
