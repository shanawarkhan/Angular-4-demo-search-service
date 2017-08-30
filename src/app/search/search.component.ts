import { Component, OnInit } from '@angular/core';
import { Person, SearchService } from '../shared/';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	  query: string;
	  searchResults: Array<Person>;
	  searchAllResults: Array<Person>;

	  constructor(private _SearchService: SearchService) {}

	_getAll(): void {
	  this._SearchService.getAll().subscribe(data => { this.searchAllResults = data; },
	    error => console.log(error)
	  );
	}

	search(): void {
  		this._SearchService.search(this.query).subscribe(
  			data => { this.searchResults = data; },
  			error => console.log(error)
  		);
  	}

  ngOnInit() {
  	
  }

}
