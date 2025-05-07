import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from './news.service';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, RouterLink, FormsModule],
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  posts: any[] = [];
  filteredPosts: any[] = [];
  searchTerm: string = '';
  expandedPosts: { [key: string]: boolean } = {};
  itemsPerPage: number = 6; // Número de notícias a exibir por página
  currentPage: number = 1; // Página atual
  get displayedPosts(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredPosts.slice(startIndex, endIndex);
  }

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.newsService.getPosts().subscribe(data => {
      this.posts = data;
      this.filteredPosts = [...this.posts];
    });
  }

  filterPosts(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.filteredPosts = this.posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.currentPage = 1; // Resetar a página ao pesquisar
  }

  toggleExpand(postId: string) {
    this.expandedPosts[postId] = !this.expandedPosts[postId];
  }

  loadMore() {
    this.currentPage++;
  }

  get hasMoreItems(): boolean {
    return this.filteredPosts.length > this.currentPage * this.itemsPerPage;
  }
}


