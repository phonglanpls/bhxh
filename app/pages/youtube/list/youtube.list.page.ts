import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { YoutubeService } from '../youtube.service';
import { YoutubeVideo } from '../models/youtube-video.model';
import { YoutubeItemPage } from '../item/youtube.item.page';
import { TruncatePipe } from '../../../pipes/truncate.pipe';

@Component({
	templateUrl: 'build/pages/youtube/list/youtube.list.html',
	providers: [YoutubeService],
	pipes: [TruncatePipe]
})
export class YoutubeListPage implements OnInit {
	private service: YoutubeService;
	private nav: NavController;

	public videos: YoutubeVideo[];

	constructor(service: YoutubeService, nav: NavController) {
		this.service = service;
		this.nav = nav;
	}

	ngOnInit(): void {
		this.service.getVideos()
			.subscribe(videos => {
				this.videos = videos;
			});
	}

	public itemTapped(item) {
		this.nav.push(YoutubeItemPage, {
			item: item
		});
	}
}
