import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';
import { VimeoVideo } from '../models/vimeo-video.model';
import { VimeoEmbedUrlPipe } from '../vimeo-embed-url.pipe';

@Component({
	templateUrl: 'build/pages/vimeo/item/vimeo.item.html',
	pipes: [VimeoEmbedUrlPipe]
})
export class VimeoItemPage {
	private video: VimeoVideo;

	constructor(navParams: NavParams) {
		this.video = <VimeoVideo>navParams.get('item');
	}
}
