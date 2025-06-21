import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-test-movie',
  standalone: true,
  imports: [CommonModule],
  template: `<p>Veja o console para a resposta da API</p>`,
})
export class TestMovieComponent implements OnInit {
  private movieService = inject(MovieService);

  ngOnInit(): void {
    console.log('🟡 Componente carregou');
    this.movieService.getAuthenticationToken().subscribe({
      next: (res) => console.log('✅ Sucesso:', res),
      error: (err) => console.error('❌ Erro:', err)
    });
  }

  // ngOnInit(): void {
  //   this.movieService.getAuthenticationToken().subscribe({
  //     next: (res) => console.log('Sucesso:', res),
  //     error: (err) => console.error('Erro:', err)
  //   });
  // }:
}