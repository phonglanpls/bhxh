import { Injectable } from '@angular/core';
import { Geolocation } from 'ionic-native';
import { IPositionParameter } from './position-parameter.model';

@Injectable()
export class PositionService {
	getPosition(): Promise<IPositionParameter[]> {
		return Geolocation.getCurrentPosition().then(this.processCoords);
	}

	watchPosition() {
		return Geolocation.watchPosition()
			.map(this.processCoords);
	}

	private processCoords(position) {
		let params = [];
		for (let key in position.coords) {
			if (position.coords[key]) {
				params.push({
					key: key,
					value: position.coords[key]
				});
			}
		}
		let date = new Date(position.timestamp);
		params.push({
			key: 'timestamp',
			value: date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
		});
		return params;
	}
}