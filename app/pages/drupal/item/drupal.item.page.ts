import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';
import { DrupalPost } from '../models/drupal-post.model';

@Component({
	templateUrl: 'build/pages/drupal/item/drupal.item.html'
})
export class DrupalItemPage {
	private post: DrupalPost;

	constructor(navParams: NavParams) {
		this.post = <DrupalPost>navParams.get('item');
	}
}
