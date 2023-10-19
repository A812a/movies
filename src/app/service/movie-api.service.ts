import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http:HttpClient) { }

  baseUrl = 'https://api.themoviedb.org/3/'
  apikey = '44b3a86fc79a98cf47553b26d5486f3a'


  bannerApiData() :Observable<any> {
    return this.http.get(`${this.baseUrl}trending/all/week?api_key=${this.apikey}`)
  }

  trendingMovieApiData() :Observable<any> {
    return this.http.get(`${this.baseUrl}trending/movie/day?api_key=${this.apikey}`)
  }

  getSearchMovie(data:any) :Observable<any> {
    return this.http.get(`${this.baseUrl}search/movie?api_key=${this.apikey}&query=${data.movieName}`)
  }

  getMovieDetails(id:any) :Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}?api_key=${this.apikey}`)
  }

  getMovieVideo(id:any) :Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}/videos?api_key=${this.apikey}`)
  }

  getMovieCast(id:any) :Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}/credits?api_key=${this.apikey}`)
  }

  fetchActionMovie() :Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=28`)
  }

  fetchAdventrueMovie() :Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=12`)
  }

  fetchAnimationMovie() :Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=16`)
  }

  fetchComedyMovie() :Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=35`)
  }

  fetchDocumentaryMovie() :Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=99`)
  }

  fetchScienceFictionMovie() :Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=878`)
  }

  fetchThrillerMovie() :Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=53`)
  }
}
