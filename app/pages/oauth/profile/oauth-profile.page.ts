import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { OAuthProfile } from '../models/oauth-profile.model';
import { OAuthService } from '../oauth.service';
import { OAuthProvidersListPage } from '../list/oauth-providers.list.page';

@Component({
	templateUrl: 'build/pages/oauth/profile/oauth-profile.html',
	providers: [OAuthService]
})
export class OAuthProfilePage {
	private oauthService: OAuthService;
	private nav: NavController;
	profile: OAuthProfile;

	constructor(oauthService: OAuthService, nav: NavController) {
		this.oauthService = oauthService;
		this.nav = nav;
		oauthService.getProfile()
			.then(profile => this.profile = profile);
	}

	logout() {
		this.oauthService.logout();
		this.nav.setRoot(OAuthProvidersListPage);
	}
}