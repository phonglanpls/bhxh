import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';
import { YoutubeVideo } from '../models/youtube-video.model';
import { YoutubeEmbedUrlPipe } from '../youtube-embed-url.pipe';

@Component({
	templateUrl: 'build/pages/youtube/item/youtube.item.html',
	pipes: [YoutubeEmbedUrlPipe]
})
export class YoutubeItemPage {
	private video: YoutubeVideo;

	constructor(navParams: NavParams) {
		this.video = <YoutubeVideo>navParams.get('item');
	}
}
