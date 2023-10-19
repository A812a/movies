import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{

  getMovieDetailsResalt:any = []
  getMovieVideoResult:any;
  getMovieCastResult:any;
  constructor(private service:MovieApiService , private route:ActivatedRoute) {}

  ngOnInit(): void {
    let getParamsId = this.route.snapshot.paramMap.get('id')
    // console.log(getParamsId)
    this.getDetails(getParamsId)
    this.getVideo(getParamsId)
    this.getCast(getParamsId)
  }

  getDetails(id:any) {
    this.service.getMovieDetails(id).subscribe((res) => {
      this.getMovieDetailsResalt = res
      // console.log(this.getMovieDetailsResalt)
    })
  }

  getVideo(id:any) {
    this.service.getMovieVideo(id).subscribe((res) => {
      res.results.forEach((element:any) => {
        if(element.type == "Featurette") {
          // || element.type == "clip"
          this.getMovieVideoResult = element.key
        }
      });
      // console.log(this.getMovieVideoResult)
    }) 
  }
  getCast(id:any) {
    this.service.getMovieCast(id).subscribe((res) => {
      this.getMovieCastResult = res.cast
      // console.log(this.getMovieCastResult)
    }) 
  }

}
