import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { LocalStorageItem } from '../models/local-storage-item.model';

@Component({
	templateUrl: 'build/pages/local-storage/edit/local-storage.edit.html'
})
export class LocalStorageEditPage {
	private viewCtrl: ViewController;
	public item: LocalStorageItem;

	constructor(viewCtrl: ViewController, params: NavParams) {
		this.viewCtrl = viewCtrl;
		this.item = params.data.id ? params.data : new LocalStorageItem();
	}

	close() {
		this.viewCtrl.dismiss();
	}

	save() {
		this.viewCtrl.dismiss(this.item);
	}
}
