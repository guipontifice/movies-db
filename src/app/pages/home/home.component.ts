import { Component } from '@angular/core';
import { DiscoverMoviesComponent } from '../../components/discover-movies/discover-movies.component';
import { TestMovieComponent } from '../../components/test-movie/test-movie.component';

@Component({
  selector: 'app-home',
  imports: [TestMovieComponent, DiscoverMoviesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
