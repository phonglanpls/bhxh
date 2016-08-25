import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';
import { Product } from '../models/product.model';

@Component({
	templateUrl: 'build/pages/products/item/products.item.html'
})
export class ProductsItemPage {
	private product: Product;

	constructor(navParams: NavParams) {
		this.product = <Product>navParams.get('item');
	}
}
