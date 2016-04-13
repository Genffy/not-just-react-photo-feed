import {Injectable} from 'angular2/core'
import {Http, Response, Jsonp, URLSearchParams } from 'angular2/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/Rx'

import {Photo} from '../interface/photo'

@Injectable()
export class PhotoService{
	private FLICKR_PUBLIC_FEED_URL = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?';
	// see https://www.flickr .com/services/api/misc.urls.html
	private SUFFIX_MEDIUM_640x640 = "_z";
	private SUFFIX_SMALL_240 = "_m";
	private SUFFIX_SMALL_320 = "_n";
	private SUFFIX_MEDIUM_500 = '';
	private SUFFIX_LARGE_1024 = '_b';

	constructor(private http: Http, private jsonp: Jsonp) {
		// code...
	}
	// 获取所有
	getAll() {
		var params = new URLSearchParams();
		params.set('format', 'json');
		params.set('callback', 'jsoncallback');
		return this.jsonp.get(this.FLICKR_PUBLIC_FEED_URL)
			.map(res => <string[]>res.json()[1])
	}
	handleErr(error: Response){
		// in a real world app, we may send the error to some remote logging infrastructure
	   	// instead of just logging it to the console
	    console.error(error);
	    return Observable.throw(error.json().error || 'Server error');
	}
}


