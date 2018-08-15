import { Component, OnInit } from '@angular/core';
import { SearchBeerService } from '../search-beer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  beerId: string = "";
  
  constructor(private searchBeerService : SearchBeerService) { }

  searchBeer () {
    this.searchBeerService.searchBeers(this.beerId).subscribe((data: any) => {
      this.searchBeerService.takeDataBase(data);
    })
  }

  ngOnInit() {

  }

}