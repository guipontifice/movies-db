import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { TestMovieComponent } from './components/test-movie/test-movie.component';
import { DiscoverMoviesComponent } from './components/discover-movies/discover-movies.component';



@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TestMovieComponent, DiscoverMoviesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'movie-db';
}
