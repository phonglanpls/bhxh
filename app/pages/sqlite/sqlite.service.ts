import { Injectable } from '@angular/core';
import { SqliteItem } from './models/sqlite-item.model';
import { Storage, SqlStorage } from 'ionic-angular';

@Injectable()
export class SqliteService {
	private storage: Storage;

	constructor() {
		this.storage = new Storage(SqlStorage);
		this.initTable();
	}

	private initTable() {
		let query = 'CREATE TABLE IF NOT EXISTS items (id integer primary key, title text, teaser text)';
		this.storage.query(query).then(null, error => {
			console.log('ERROR -> ' + JSON.stringify(error.err));
		});
	}

	public select(): Promise<SqliteItem[]> {
		let query = 'SELECT id, title, teaser FROM items';
		return this.storage.query(query)
			.then(data => {
				let items: SqliteItem[] = [];
				for (let i = 0; i < data.res.rows.length; i++) {
					items.push(data.res.rows[i]);
				}
				return items;
			});
	}

	public addItem(item: SqliteItem) {
		let query = 'INSERT INTO items (title, teaser) VALUES (?, ?)';
		return this.storage.query(query, [item.title, item.teaser]).then(data => {
			item.id = data.res.insertId;
			return item;
		});
	}

	public deleteItem(id: string) {
		let query = 'DELETE FROM items WHERE id = ?';
		return this.storage.query(query, [id]);
	}

	public updateItem(item: SqliteItem) {
		let query = 'UPDATE items SET title = ?, teaser = ? WHERE id = ?';
		return this.storage.query(query, [item.title, item.teaser, item.id]);
	}
}