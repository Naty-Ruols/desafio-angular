import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news.service'; // Ajuste o caminho se necessário
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  fullText: string | null = null;
  id: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.route.queryParams.subscribe(queryParams => {
      this.fullText = queryParams['fullText'];
      console.log('fullText recebido:', this.fullText); 
    });
  }
}
