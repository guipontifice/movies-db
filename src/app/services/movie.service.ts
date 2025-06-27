import { Injectable } from '@angular/core';
import { environment } from '../../environment/enviroment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = environment.API_URL;
  private headers = new HttpHeaders({
    accept: 'application/json',
    Authorization: environment.API_TOKEN,
  })
  constructor(private http: HttpClient) { }

  getAuthenticationToken(): Observable<any> {
    return this.http.get(`${this.apiUrl}/authentication/token/new`, { headers: this.headers }
    )
  }

  getDiscoverMovie(): Observable<any> {
    return this.http.get(`${this.apiUrl}/discover/movie`, { headers: this.headers })
  }

  getPopularMovie(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/popular?language=pt-BR&page=1`, {headers: this.headers})
  }

  getNowPlaying(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/now_playing?language=en-US&page=1'`, {headers: this.headers})
  }
}
