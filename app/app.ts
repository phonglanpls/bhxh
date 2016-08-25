import { Component } from '@angular/core';

import { Platform, IONIC_DIRECTIVES, MenuController, App, ionicBootstrap } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

import { HomePage } from './pages/home/home.page';
import { WordpressListPage } from './pages/wordpress/list/wordpress.list.page';
import { WordpressListPage_vanban } from './pages/wordpress-vanban/list/wordpress.list.page';

import { SlideBoxPage } from './pages/slide-box/slide-box.page';
import { GoogleMapsPage } from './pages/google-maps/google-maps.page';
import { Config } from './config';
import { EmailService } from './services/email.service.ts';
import { CallService } from './services/call.service';
import { MapsService } from './services/maps.service';
import { InAppBrowserService } from './services/in-app-browser.service';
import { DrupalListPage } from './pages/drupal/list/drupal.list.page';
import { YoutubeListPage } from './pages/youtube/list/youtube.list.page';
import { VimeoListPage } from './pages/vimeo/list/vimeo.list.page';
import { NewsListPage } from './pages/news/list/news.list.page';
import { ProductsListPage } from './pages/products/list/products.list.page';
import { LocalStorageListPage } from './pages/local-storage/list/local-storage.list.page';
import { OAuthProvidersListPage } from './pages/oauth/list/oauth-providers.list.page';
import { OAuthService } from './pages/oauth/oauth.service';
import { OAuthProfilePage } from './pages/oauth/profile/oauth-profile.page';
import { SqliteListPage } from './pages/sqlite/list/sqlite.list.page';
import { GoogleOauthProvider } from './pages/oauth/google/google-oauth.provider';
import { FacebookOauthProvider } from './pages/oauth/facebook/facebook-oauth.provider';

import {MovieListPage} from './pages/movies/movie-list/movie-list';

import {TabsPage} from './pages/loginbackand/pages/tabs/tabs';



@Component({
	templateUrl: 'build/app.html',
	directives: [IONIC_DIRECTIVES]
})
class MyApp {
	private app;
	private platform;
	private pages;
	private rootPage;
	private menu: MenuController;
	private oauthService: OAuthService;

	@ViewChild(Nav) nav: Nav;

	constructor(platform: Platform, menu: MenuController, oauthService: OAuthService, app: App) {
		this.menu = menu;
		this.oauthService = oauthService;
		// set up our app
		this.app = app;
		this.platform = platform;
		this.initializeApp();

		// set our app's pages
		this.pages = [
			{ title: 'Trang chủ', component: HomePage, icon: 'home' },
			{ title: 'Tin tức', component: WordpressListPage, icon: 'book' },
			{ title: 'Văn bản', component: WordpressListPage, icon: 'logo-wordpress' },
			{ title: 'Drupal', component: DrupalListPage, icon: 'water' },
			{ title: 'Slides', component: SlideBoxPage, icon: 'swap' },
			{ title: 'Google maps', component: GoogleMapsPage, icon: 'map' },
			{ title: 'YouTube', component: YoutubeListPage, icon: 'logo-youtube' },
			{ title: 'Vimeo', component: VimeoListPage, icon: 'logo-vimeo' },
			{ title: 'News', component: NewsListPage, icon: 'paper' },
			{ title: 'Products', component: ProductsListPage, icon: 'archive' },
			{ title: 'Local storage', component: LocalStorageListPage, icon: 'cloud' },
			{ title: 'SQLite', component: SqliteListPage, icon: 'cube' },
			{ title: 'OAuth', component: OAuthProvidersListPage, icon: 'log-in' },
			{ title: 'Movie List', component: MovieListPage, icon: 'aperture' },
			{ title: 'Tabs List', component: TabsPage, icon: 'log-in' },
		];

		this.rootPage = HomePage;
	}

	initializeApp() {
		this.platform.ready().then(() => {
			console.log('Platform ready');

			// The platform is now ready. Note: if this callback fails to fire, follow
			// the Troubleshooting guide for a number of possible solutions:
			//
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			//
			// First, let's hide the keyboard accessory bar (only works natively) since
			// that's a better default:
			//
			//
			// For example, we might change the StatusBar color. This one below is
			// good for light backgrounds and dark text;
			if (typeof window.StatusBar !== 'undefined') {
				window.StatusBar.styleDefault();
			}
		});
	}

	openPage(page) {
		// close the menu when clicking a link from the menu
		this.menu.close();
		// navigate to the new page if it is not the current page
		let component = page.component;
		console.log("Component",component);
		if (component === OAuthProvidersListPage && this.oauthService.isAuthorized()) {
			component = OAuthProfilePage;
		}

		this.nav.setRoot(component);
	}
}

ionicBootstrap(MyApp, [
	Config,
	EmailService,
	CallService,
	MapsService,
	InAppBrowserService,
	OAuthService,
	FacebookOauthProvider,
	GoogleOauthProvider,
	
]);
