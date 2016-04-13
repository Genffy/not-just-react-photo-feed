import {Injectable} from 'angular2/core'
import {Http, Response, Jsonp } from 'angular2/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/Rx'

import {Photo} from '../interface/photo'

@Injectable()
export class PhotoService{
	private FLICKR_PUBLIC_FEED_URL = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSONP_CALLBACK'
    private YANDEX_PUBLIC_FEED_URL = 'http://api-fotki.yandex.ru/api/podhistory/poddate/?format=json&callback=JSONP_CALLBACK'
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
        return Observable.forkJoin(
            this.getFlickr(),
            this.getYandex()
        )
	}
    getYandex() {
        return this.jsonp.get(this.YANDEX_PUBLIC_FEED_URL)
			.map(res =>{
                // TODO data formate
                let data = res.json()
                return this.formateYandex(data.entries)
            });
    }
    getFlickr() {
        return this.jsonp.get(this.FLICKR_PUBLIC_FEED_URL)
			.map(res =>{
                let data = res.json()
                return this.formateFlickr(data.items)
            });
    }
	handleErr(error: Response){
		// in a real world app, we may send the error to some remote logging infrastructure
	   	// instead of just logging it to the console
	    console.error(error);
	    return Observable.throw(error.json().error || 'Server error');
	}
    formateFlickr(data:any) {
        let photos = data.map(item => ({
            title : item.title,
            id : this.getLastPartOfUrl(item.link),
            link : item.link,
            src : item.media.m.replace(this.SUFFIX_SMALL_240, this.SUFFIX_SMALL_320),
            bigSrc : item.media.m.replace(this.SUFFIX_SMALL_240, this.SUFFIX_LARGE_1024),
            author : item.author,
            created : Date.parse(item.published),
            tags : item.tags
        }));
        return <Photo[]> photos
    }
    formateYandex(data:any) {
        let photos = data.map(item => ({
            title : item.title,
            id : item.id,
            link : item.links.alternate,
            src : item.img.L.href,
            bigSrc : item.img.XXL.href,
            author : item.author,
            created : Date.parse(item.published),
            tags : Object.keys(item.tags).join(',')
        }));
        return <Photo[]> photos
    }
    getLastPartOfUrl (url:string) {
        let matches = url.match(/\/([^/]*)([/]*)$/);
        return matches && matches.length > 1 ? matches [1] : null;
    }
}


