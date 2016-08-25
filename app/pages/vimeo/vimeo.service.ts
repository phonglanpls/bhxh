import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Config } from '../../config';
import { Observable } from 'rxjs';
import { VimeoVideo } from './models/vimeo-video.model';

@Injectable()
export class VimeoService {
	private http: Http;
	private config;
	private url: string;

	constructor(http: Http, config: Config) {
		this.http = http;

		let vimeoConfig = config.vimeo;
		this.config = vimeoConfig;

		this.url = `${vimeoConfig.apiUrl}${vimeoConfig.userId}/videos?per_page=${vimeoConfig.itemsPerPage}`;
	}

	public getVideos(): Observable<VimeoVideo[]> {
		let headers = new Headers();
		headers.append('Authorization', 'Bearer ' + this.config.accessToken);

		return this.http.get(this.url, {
				headers: headers
			})
			.map(x => x.json())
			.map(x => {
				let videos = x.data.map(item => {
					let id = item.uri.substring(8);

					let image = item.pictures.sizes[0].link;

					return {
						id: id,
						title: item.name,
						description: item.description,
						date: item.created_time,
						image: image,
						thumb: image,
						videoId: id
					};
				});

				return videos;
			});
	}
}