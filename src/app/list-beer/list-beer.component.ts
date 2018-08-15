import { Component, OnInit } from '@angular/core';
import { SearchBeerService } from '../search-beer.service';

@Component({
  selector: 'app-list-beer',
  templateUrl: './list-beer.component.html',
  styleUrls: ['./list-beer.component.css']
})
export class ListBeerComponent implements OnInit {
  listOfBeers: object = [];

  constructor(private searchBeerService : SearchBeerService) { }

  showBeers(){
    this.searchBeerService.observeFoundBeer.subscribe(data => {
      this.listOfBeers = data;
      console.log(this.listOfBeers);
    })
  }

  ngOnInit() {
    this.showBeers();
  }

}