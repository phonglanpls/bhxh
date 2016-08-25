import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';
import { News } from '../models/news.model';

@Component({
	templateUrl: 'build/pages/news/item/news.item.html'
})
export class NewsItemPage {
	private post: News;

	constructor(navParams: NavParams) {
		this.post = <News>navParams.get('item');
	}
}
