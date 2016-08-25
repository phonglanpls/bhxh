import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	//public wordpressApiUrl = 'http://hoidilam.com/?json=1';
	  public wordpressApiUrl='http://bhxh.laocai.net/api/get_category_posts/?category_slug=su-kien';
	//public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';

	public drupalApiUrl = 'http://demo.titaniumtemplates.com/drupal/rest/views/rest_api';
	public youtube = {
		apiUrl: 'https://www.googleapis.com/youtube/v3/',
		key: 'AIzaSyDael5MmCQa1GKQNKQYypmBeB08GATgSEo',
		itemsPerPage: 20,
		username: 'google'
	};
	public vimeo = {
		userId: 'user13092665',
		accessToken: 'd995ffff0228beba7c9716c3ee0d4add',
		apiUrl: 'https://api.vimeo.com/users/',
		itemsPerPage: 20
	};
	public newsUrl = 'http://skounis.s3.amazonaws.com/mobile-apps/barebone-glossy/news.json';
	public productsUrl = 'http://skounis.s3.amazonaws.com/mobile-apps/barebone-glossy/products.json';
	public facebook = {
		apiUrl: 'https://graph.facebook.com/v2.3/',
		appId: '927897987270774',
		scope: ['email']
	};
	public google = {
		apiUrl: 'https://www.googleapis.com/oauth2/v3/',
		appId: '400671186930-m07eu77bm43tgr30p90k6b9e1qgsva4p.apps.googleusercontent.com',
		scope: ['email']
	};
}