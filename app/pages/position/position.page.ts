import { Component } from '@angular/core';
import { IPositionParameter } from './position-parameter.model';
import { PositionService } from './position.service';

@Component({
	templateUrl: 'build/pages/position/position.html',
	providers: [PositionService]
})
export class PositionPage {
	private items: IPositionParameter[];
	private service: PositionService;

	constructor(service: PositionService) {
		this.service = service;
		this.items = [];
		this.startWatching();
	}

	private startWatching() {
		this.service.watchPosition()
			.subscribe(items => {
				this.items = items;
			});
	}
}
