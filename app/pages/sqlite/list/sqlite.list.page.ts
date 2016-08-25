import { Component, OnInit } from '@angular/core';

import { ModalController } from 'ionic-angular';

import { TruncatePipe } from '../../../pipes/truncate.pipe.ts';
import { SqliteService } from '../sqlite.service';
import { SqliteItem } from '../models/sqlite-item.model';
import { SqliteEditPage } from '../edit/sqlite.edit.page';

@Component({
	templateUrl: 'build/pages/sqlite/list/sqlite.list.html',
	providers: [SqliteService],
	pipes: [TruncatePipe]
})
export class SqliteListPage implements OnInit {
	private service: SqliteService;
	private modalController: ModalController;

	public items: SqliteItem[];

	constructor(service: SqliteService, modal: ModalController) {
		this.service = service;
		this.modalController = modal;
	}

	ngOnInit(): void {
		this.loadItems();
	}

	addItem() {
		let modal = this.modalController.create(SqliteEditPage);
		modal.onDidDismiss(item => {
			if (!item) {
				return;
			}
			this.service.addItem(item)
				.then(x => this.loadItems());
		});
		modal.present();
	}

	private loadItems() {
		this.service.select()
			.then(items => this.items = items);
	}

	editItem(item) {
		let modal = this.modalController.create(SqliteEditPage, item);
		modal.onDidDismiss(changedItem => {
			if (!changedItem) {
				return;
			}
			this.service.updateItem(changedItem)
				.then(x => this.loadItems());
		});
		modal.present();
	}

	deleteItem(id) {
		this.service.deleteItem(id)
			.then(x => this.loadItems());
	}
}
