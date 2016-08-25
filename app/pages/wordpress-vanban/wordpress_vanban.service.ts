import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from '../../config';
import { Observable } from 'rxjs';
import { WordpressPost } from './models/wordpress-post.model';

@Injectable()
export class WordpressService {
	private http: Http;
	private config: Config;
	private articles: WordpressPost[];

	constructor(http: Http, config: Config) {
		this.http = http;
		this.config = config;
	}

	public getPosts(): Observable<WordpressPost[]> {
		return this.http.get("http://bhxh.laocai.net/api/get_category_posts/?category_slug=su-kien")
			.map(x => x.json())
			.map(response => {
				this.articles = response.posts.map((item: any) => this.createArticle(item));
				return this.articles;
			});
	}

	private createArticle(item): WordpressPost {
		let imageUrl = item.attachments.length > 0 ? item.attachments[0].images.full.url : null;
		let tags = item.tags.map(x => x.title);

		let contentIndex = item.content.indexOf('/p>') + 4;
		let content = contentIndex === -1 ? item.content : item.content.substring(contentIndex);
		 //let content ="17";
		 console.log(content);
		return {
			id: item.id,
			title: item.title,
			brief: item.excerpt,
			image: imageUrl,
			date: item.date,
			content: content,
			author: item.author.name,
			tags: tags,
			url: this.config.wordpressApiUrl
		};
	};
}