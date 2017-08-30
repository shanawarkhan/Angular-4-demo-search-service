import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  constructor(private _Http: Http) {}

  getAll() {
    return this._Http.get('assets/data/people.json').map((res: Response) => res.json());
  }

  search(q: string): Observable<any> {
  	if (!q || q === '*') {
  		q = '';
  	} else {
  		q = q.toLowerCase();
  	}
  	return this.getAll().map(data => data.filter(item => JSON.stringify(item).toLocaleLowerCase().includes(q)));
  }
}

export class Address {
  street: string;
  city: string;
  state: string;
  zip: string;

  constructor(obj?: any) {
    this.street = obj && obj.street || null;
    this.city = obj && obj.city || null;
    this.state = obj && obj.state || null;
    this.zip = obj && obj.zip || null;
  }
}

export class Person {
  id: number;
  name: string;
  phone: string;
  address: Address;

  constructor(obj?: any) {
    this.id = obj && Number(obj.id) || null;
    this.name = obj && obj.name || null;
    this.phone = obj && obj.phone || null;
    this.address = obj && obj.address || null;
  }
}