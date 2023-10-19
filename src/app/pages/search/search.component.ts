import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResult:any = []
  constructor(private service:MovieApiService) {}

  ngOnInit(): void {

  }

  searchFrom = new FormGroup({
    'movieName':new FormControl(null)
  })

  submitForm() {
    this.service.getSearchMovie(this.searchFrom.value).subscribe((res) => {
      this.searchResult = res.results
      console.log(this.searchResult)
    }) 
  }

}
