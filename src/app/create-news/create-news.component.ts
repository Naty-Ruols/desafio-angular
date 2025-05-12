import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-news',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent {
  newPost = { title: '', body: '' };
  hasSubmitted = true;

  constructor(private newsService: NewsService, private router: Router) {}

  onSubmit() {
    this.hasSubmitted = true;
    if (this.newPost.title && this.newPost.body && this.newPost.body.length >= 10) {
      console.log('Notícia cadastrada localmente:', this.newPost);
      this.newsService.addNewPost(this.newPost);
      this.router.navigate(['/']);
    } else {
      console.log('Formulário inválido. Preencha todos os campos corretamente.');
    }
  }
}