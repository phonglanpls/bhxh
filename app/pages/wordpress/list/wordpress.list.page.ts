import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { WordpressService } from './../wordpress.service.ts';
import { TruncatePipe } from '../../../pipes/truncate.pipe.ts';
import { TrimHtmlPipe } from '../../../pipes/trim-html.pipe.ts';
import { WordpressItemPage } from '../item/wordpress.item.page';
import { WordpressPost } from '../models/wordpress-post.model';


//http://bhxh.laocai.net/?json=%20get_search_results&post_id=1 search
@Component({
	templateUrl: 'build/pages/wordpress/list/wordpress.list.html',
	providers: [WordpressService],
	pipes: [TruncatePipe, TrimHtmlPipe]
})
export class WordpressListPage implements OnInit {
	private wordpressService: WordpressService;
	private nav: NavController;

	public posts: WordpressPost[];

	constructor(wordpressService: WordpressService, nav: NavController) {
		this.wordpressService = wordpressService;
		this.nav = nav;
	}

	ngOnInit(): void {
		this.wordpressService.getPosts()
			.subscribe(posts => {
				this.posts = posts;
			});
	}

	public itemTapped(item) {
		this.nav.push(WordpressItemPage, {
			item: item
		});
	}
}
