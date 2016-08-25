import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from '../../config';
import { LocalStorageItem } from './models/local-storage-item.model';
import { uuid } from '../../utils/uuid';

@Injectable()
export class LocalStorageService {
	private key = 'local-storage-item-key';

	private http: Http;
	private config: Config;

	constructor(http: Http, config: Config) {
		this.http = http;
		this.config = config;
	}

	public getItems(): LocalStorageItem[] {
		let items = localStorage.getItem(this.key);
		return items ? JSON.parse(items) : [];
	}

	public addItem(item: LocalStorageItem) {
		item.id = uuid();
		let items = this.getItems();
		items.push(item);
		this.saveItems(items);
	}

	public deleteItem(id: string) {
		let items = this.getItems();
		items = items.filter(x => x.id !== id);
		this.saveItems(items);
	}

	public updateItem(item: LocalStorageItem) {
		let items = this.getItems();
		let storedItem = <LocalStorageItem>items.find(x => x.id === item.id);
		storedItem.title = item.title;
		storedItem.teaser = item.teaser;
		this.saveItems(items);
	}

	private saveItems(items: LocalStorageItem[]) {
		localStorage.setItem(this.key, JSON.stringify(items));
	}
}