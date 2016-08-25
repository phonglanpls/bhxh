import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from '../../config';
import { Observable } from 'rxjs';
import { News } from './models/news.model';

@Injectable()
export class NewsService {
	private http: Http;
	private config: Config;

	constructor(http: Http, config: Config) {
		this.http = http;
		this.config = config;
	}

	public getPosts(): Observable<News[]> {
		return this.http.get(this.config.newsUrl)
			.map(x => x.json())
			.map((x: any) => <News[]>x.result);
	}
}