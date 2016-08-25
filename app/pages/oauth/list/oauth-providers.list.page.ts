import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OAuthService } from '../oauth.service';
import { OAuthProfilePage } from '../profile/oauth-profile.page';

@Component({
	templateUrl: 'build/pages/oauth/list/oauth-providers.list.html',
	providers: [OAuthService]
})
export class OAuthProvidersListPage {
	private oauthService: OAuthService;
	private nav: NavController;

	constructor(oauthService: OAuthService, nav: NavController) {
		this.oauthService = oauthService;
		this.nav = nav;

		if (oauthService.isAuthorized()) {
			this.nav.setRoot(OAuthProfilePage);
		}
	}

	public login(source: string) {
		this.oauthService.login(source)
			.then(
				() => this.nav.setRoot(OAuthProfilePage),
				error => alert(error)
			);
	}
}
