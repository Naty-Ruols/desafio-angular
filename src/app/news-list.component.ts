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

  imageUrls: string[]=[
    'https://conteudo.imguol.com.br/c/noticias/44/2023/05/03/alexa-dispositivo-echo-amazon-cozinha-1683135556382_v2_900x506.jpg', //Primeira imagem

    'https://braziljournal.com/wp-content/uploads/2025/05/shutterstock_2601384475-857x482.jpg',

    'https://t2.tudocdn.net/720657?w=646&h=284',

    'https://t2.tudocdn.net/753042?w=646&h=284',

    'https://media.licdn.com/dms/image/v2/C4D0BAQFGyOEgyZyCjg/company-logo_200_200/company-logo_200_200/0/1670333212222/marlin_logo?e=2147483647&v=beta&t=_TgUadkm378JW6esyrDeIfcy3I_heucN9p3qmrghpS0',

    'https://s2-techtudo.glbimg.com/SB_XDQV2AOMfyVDlAUJidPcvmyo=/0x0:1600x900/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2024/l/5/EeyeA2RqqJzSFfnQGmoA/amazon-kindle-colorsoft-tela-colorida.jpg'];


  get displayedPosts(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredPosts.slice(startIndex, endIndex);
  }

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadInitialPosts(); // Carrega as notícias da API inicialmente
    this.newsService.newPost$.subscribe(newPost => {
      this.posts = [newPost, ...this.posts];
      this.filteredPosts = [...this.posts];
    });
  }

  loadInitialPosts() {
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

  toggleExpand(index: number, postTitle: string) {
  this.expandedPosts[`${index}-${postTitle}`] = !this.expandedPosts[`${index}-${postTitle}`];
}

  loadMore() {
    this.currentPage++;
  }

  get hasMoreItems(): boolean {
    return this.filteredPosts.length > this.currentPage * this.itemsPerPage;
  }

  getImageUrl(index: number): string
  // Alterna as imagens
  {return this.imageUrls[Math.floor(index/1)% this.imageUrls.length];
  }
}


