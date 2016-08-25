import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { TruncatePipe } from '../../../pipes/truncate.pipe.ts';
import { NewsService } from '../news.service';
import { News } from '../models/news.model';
import { NewsItemPage } from '../item/news.item.page';

@Component({
	templateUrl: 'build/pages/news/list/news.list.html',
	providers: [NewsService],
	pipes: [TruncatePipe]
})
export class NewsListPage implements OnInit {
	private service: NewsService;
	private nav: NavController;

	public posts: News[];

	constructor(service: NewsService, nav: NavController) {
		this.service = service;
		this.nav = nav;
	}

	ngOnInit(): void {
		this.service.getPosts()
			.subscribe(posts => {
				this.posts = posts;
			});
	}

	public itemTapped(item) {
		this.nav.push(NewsItemPage, {
			item: item
		});
	}
}
