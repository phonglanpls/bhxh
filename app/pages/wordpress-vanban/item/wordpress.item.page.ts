import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';
import { WordpressPost } from '../models/wordpress-post.model';

@Component({
	templateUrl: 'build/pages/wordpress/item/wordpress.item.html'
})
export class WordpressItemPage {
	private post: WordpressPost;

	constructor(navParams: NavParams) {
		this.post = <WordpressPost>navParams.get('item');
	}
}
