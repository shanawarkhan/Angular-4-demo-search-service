import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person, SearchService } from '../shared/';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
	  query: string;
	  searchResults: Array<Person>;
	  getAllResults: Array<Person>;

	  sub: Subscription;

	  constructor(private _SearchService: SearchService,
                private router: Router,
                private route: ActivatedRoute) {
	    this.sub = this.route.params.subscribe(params => {
	      if (params['term']) {
	        this.query = decodeURIComponent(params['term']);
	        this.search();
	      }
	    });
	  }

	_getAll(): void {
	  this._SearchService.getAll().subscribe(data => { this.getAllResults = data; },
	    error => console.log(error)
	  );
	}

	search(): void {
  		this._SearchService.search(this.query).subscribe(
  			data => { this.searchResults = data; },
  			error => console.log(error)
  		);
  	}

  	searchie(): void {
  		this._SearchService.search(this.query).subscribe(
  			data => { this.searchResults = data; },
  			error => console.log(error)
  		);
  	}

  	ngOnInit() {

  	}
    ngOnDestroy() {
      this.sub.unsubscribe();
    }

}
