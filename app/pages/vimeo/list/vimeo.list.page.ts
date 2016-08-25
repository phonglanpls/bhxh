import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TruncatePipe } from '../../../pipes/truncate.pipe';
import { VimeoService } from '../vimeo.service';
import { VimeoItemPage } from '../item/vimeo.item.page';
import { VimeoVideo } from '../models/vimeo-video.model';

@Component({
	templateUrl: 'build/pages/vimeo/list/vimeo.list.html',
	providers: [VimeoService],
	pipes: [TruncatePipe]
})
export class VimeoListPage implements OnInit {
	private service: VimeoService;
	private nav: NavController;

	public videos: VimeoVideo[];

	constructor(service: VimeoService, nav: NavController) {
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
		this.nav.push(VimeoItemPage, {
			item: item
		});
	}
}
