import { Component, inject, OnInit } from '@angular/core';
import { DiscoverMoviesComponent } from '../../components/discover-movies/discover-movies.component';
import { TestMovieComponent } from '../../components/test-movie/test-movie.component';
import { MovieService } from '../../services/movie.service';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, TestMovieComponent, DiscoverMoviesComponent, CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  // private movieService = inject(MovieService);

  constructor(private MovieService: MovieService) { }
  movies: any[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  totalResults: number = 0;

  ngOnInit(): void {
    this.MovieService.getPopularMovie().subscribe({
      next: (res) => {
        this.movies = res.results;
        this.currentPage = res.page;
        this.totalPages = res.total_pages;
        this.totalResults = res.total_results;

        console.log('✅ Sucesso ao carregar filmes:', this.movies);
      },
      error: (err) => {
        console.error('❌ Erro ao carregar filmes:', err);
      }
    });
  }

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

}
