import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
	templateUrl: 'build/pages/movies/movie-info/movie-info.html'
})

export class MovieInfo {
	
	movie: {};	
	
	constructor(private navController: NavController, private navParams: NavParams) {
		this.movie = navParams.get('movie');
	}	
}