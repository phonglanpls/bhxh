import { Injectable } from '@angular/core';

import { IOathProvider } from '../oauth.provider.interface';
import { OAuthProfile } from '../models/oauth-profile.model';
import { CordovaOauth } from 'ng2-cordova-oauth/oauth';
import { Google } from 'ng2-cordova-oauth/core';
import { Config } from '../../../config';
import { Http } from '@angular/http';

interface ILoginResponse {
	access_token: string;
}

@Injectable()
export class GoogleOauthProvider implements IOathProvider {
	private http: Http;
	private config: Config;
	private cordovaOauth: CordovaOauth;

	constructor(http: Http, config: Config) {
		this.http = http;
		this.config = config;
		let google = new Google({ clientId: config.google.appId, appScope: config.google.scope });
		this.cordovaOauth = new CordovaOauth(google);
	}

	login(): Promise<string> {
		return this.cordovaOauth.login().then((x: ILoginResponse) => x.access_token);
	}

	getProfile(accessToken: string): Promise<OAuthProfile> {
		let query = `access_token=${accessToken}`;
		let url = `${this.config.google.apiUrl}userinfo?${query}`;

		return this.http.get(url)
			.map(x => x.json())
			.map(x => {
				let name = x.name.split(' ');
				return {
					firstName: name[0],
					lastName: name[1],
					email: x.email,
					provider: 'google'
				};
			})
			.toPromise();
	}
}