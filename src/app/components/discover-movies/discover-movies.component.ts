import { Component, inject, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
// import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importe BrowserAnimationsModule aqui também
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-discover-movies',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './discover-movies.component.html',
  styleUrl: './discover-movies.component.scss'
})


export class DiscoverMoviesComponent implements OnInit {
  private movieService = inject(MovieService);

  movies: any[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  totalResults: number = 0;


  
  ngOnInit(): void {
    this.movieService.getDiscoverMovie().subscribe({
      next: (res) => {
        // Armazene os dados nas proprprichaiedades do componente
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
