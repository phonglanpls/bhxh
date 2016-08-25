import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from '../../config';
import { Observable } from 'rxjs';
import { YoutubeVideo } from './models/youtube-video.model';

@Injectable()
export class YoutubeService {
	private http: Http;
	private config;

	private videosUrl: string;
	private playlistsUrl: string;

	constructor(http: Http, config: Config) {
		this.http = http;

		let youtubeConfig = config.youtube;
		this.config = youtubeConfig;
		this.videosUrl = `${youtubeConfig.apiUrl}playlistItems?part=snippet&key=${youtubeConfig.key}&maxResults=${youtubeConfig.itemsPerPage}`;
		this.playlistsUrl = `${youtubeConfig.apiUrl}channels?part=contentDetails&key=${youtubeConfig.key}`;
	}

	private getPlaylistId(username): Observable<string> {
		let url = `${this.playlistsUrl}&forUsername=${username}`;

		return this.http.get(url)
			.map(x => x.json())
			.map(x => {
				let items = x.items;
				if (items.length && items[0].contentDetails.relatedPlaylists.uploads) {
					return <string>items[0].contentDetails.relatedPlaylists.uploads;
				}

				return null;
			});
	}

	public getVideos(): Observable<YoutubeVideo[]> {
		return this.getPlaylistId(this.config.username)
			.switchMap(playlistId => {
				if (!playlistId) {
					return Observable.throw('No users found');
				}
				let url = `${this.videosUrl}&playlistId=${playlistId}`;

				return this.http.get(url)
					.map(x => x.json())
					.map(x => {
						let videos: YoutubeVideo[] = [];

						x.items.forEach(item => {
							let snippet = item.snippet;
							let thumbs = snippet.thumbnails;

							let maxThumb = thumbs.maxres || thumbs.high || thumbs.medium || thumbs.default;

							videos.push({
								id: item.id,
								title: snippet.title,
								description: snippet.description,
								date: snippet.publishedAt,
								image: maxThumb.url,
								thumb: thumbs.default.url,
								videoId: snippet.resourceId.videoId
							});
						});
						return videos;
					});
			});
	}
}