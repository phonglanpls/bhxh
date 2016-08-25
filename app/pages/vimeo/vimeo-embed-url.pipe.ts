import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizationService, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
	name: 'vimeoEmbedUrl'
})
export class VimeoEmbedUrlPipe implements PipeTransform {
	private sanitizer: DomSanitizationService;

	constructor(sanitizer: DomSanitizationService) {
		this.sanitizer = sanitizer;

	}

	transform(value: string, args: string[]): SafeResourceUrl {
		let url = 'http://player.vimeo.com/video/' + value;
		return this.sanitizer.bypassSecurityTrustResourceUrl(url);
	}
}