import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/service/movie-api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  bannerResult:any = []
  TrendingMovieResult:any = []
  actionMovieResult:any = [];
  adventrueMovieResult:any = [];
  animationMovieResult:any = [];
  ComedyMovieResult:any = [];
  documentaryMovieResult:any = [];
  scienceFictionMovieResult:any = [];
  thrillerMovieResult:any = [];

  constructor(private service:MovieApiService) {}

  ngOnInit(): void {
    this.bannerData()
    this.trendingData()
    this.actionMovie();
    this.adventrueMovie();
    this.animationMovie();
    this.comedyMovie();
    this.documentaryMovie();
    this.scienceFictionMovie();
    this.thrillerMovie();
  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    margin: 10,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      500: {
        items: 3
      },
      700: {
        items: 4
      },
      900: {
        items: 5
      },
      1300: {
        items: 6
      },
    },
    nav: true
  }

  bannerData() {
   this.service.bannerApiData().subscribe((res:any) => {
     this.bannerResult = res.results
    //  console.log(this.bannerResult)
   })
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((res:any) => {
      this.TrendingMovieResult = res.results
      // console.log(this.TrendingMovieResult)
    })
  }

  // action
  actionMovie() {
    this.service.fetchActionMovie().subscribe(res => {
      this.actionMovieResult = res.results
      // console.log(this.actionMovieResult)
    })
  }

  // adventrue
  adventrueMovie() {
    this.service.fetchAdventrueMovie().subscribe(res => {
      this.adventrueMovieResult = res.results
      // console.log(this.adventrueMovieResult)
    })
  }

  // animation
  animationMovie() {
    this.service.fetchAnimationMovie().subscribe(res => {
      this.animationMovieResult = res.results
      // console.log(this.animationMovieResult)
    })
  }

  // comedy
  comedyMovie() {
    this.service.fetchComedyMovie().subscribe(res => {
      this.ComedyMovieResult = res.results
      // console.log(this.ComedyMovieResult)
    })
  }

  // documentary
  documentaryMovie() {
    this.service.fetchDocumentaryMovie().subscribe(res => {
      this.documentaryMovieResult = res.results
      // console.log(this.documentaryMovieResult)
    })
  }

  // scienceFiction
  scienceFictionMovie() {
    this.service.fetchScienceFictionMovie().subscribe(res => {
      this.scienceFictionMovieResult = res.results
      // console.log(this.scienceFictionMovieResult)
    })
  }

  // thriller
  thrillerMovie() {
    this.service.fetchThrillerMovie().subscribe(res => {
      this.thrillerMovieResult = res.results
      // console.log(this.thrillerMovieResult)
    })
  }

}
