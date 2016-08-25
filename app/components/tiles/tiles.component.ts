import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IONIC_DIRECTIVES } from 'ionic-angular';

@Component({
	selector: 'tiles',
	templateUrl: 'build/components/tiles/tiles.html',
	directives: [IONIC_DIRECTIVES]
})
export class TilesComponent implements OnInit {
	@Input() items: any[];
	@Output() itemTapped: EventEmitter<any> = new EventEmitter<any>();

	columns: number = 2;
	itemGroups: any[][] = [];

	ngOnInit(): any {
		let line = [];
		this.items.forEach(item => {
			line.push(item);
			if (line.length === this.columns) {
				this.itemGroups.push(line);
				line = [];
			}
		});
		if (line.length) {
			this.itemGroups.push(line);
		}
	}

	itemClicked(item) {
		this.itemTapped.emit(item);
	}
}