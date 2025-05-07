import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from './news.service';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RouterLink, RouterModule } from '@angular/router'; // Importe RouterModule
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, RouterModule, RouterLink, FormsModule], // Adicione RouterModule e RouterLink aos imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  posts: any[] = []; // Inicialize como array
  filteredPosts: any[] = []; //expande o texto
  searchTerm: string = '';
  expandedPosts: { [key: string]: boolean } = {};

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.newsService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
        this.filteredPosts = [...this.posts]; // Inicializa a lista filtrada
        console.log(this.posts);
      },
      error: (err) => {
        console.error('Erro ao carregar posts:', err);
      }
    });
  }

  filterPosts(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.filteredPosts = this.posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  toggleExpand(postId: string) {
    this.expandedPosts[postId] = !this.expandedPosts[postId];
  }
}


