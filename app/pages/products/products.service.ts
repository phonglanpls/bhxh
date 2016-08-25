import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from '../../config';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';

@Injectable()
export class ProductsService {
	private http: Http;
	private config: Config;

	constructor(http: Http, config: Config) {
		this.http = http;
		this.config = config;
	}

	public getProducts(): Observable<Product[]> {
		return this.http.get(this.config.productsUrl)
			.map(x => x.json())
			.map(x => <Product[]>x.result);
	}
}