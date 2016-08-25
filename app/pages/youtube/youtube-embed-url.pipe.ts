import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizationService, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
	name: 'youtubeEmbedUrl'
})
export class YoutubeEmbedUrlPipe implements PipeTransform  {
	private sanitizer: DomSanitizationService;

	constructor(sanitizer: DomSanitizationService) {
		this.sanitizer = sanitizer;

	}

	transform(value: string, args: string[]): SafeResourceUrl {
		let url = 'http://www.youtube.com/embed/' + value;
		return this.sanitizer.bypassSecurityTrustResourceUrl(url);
	}
}