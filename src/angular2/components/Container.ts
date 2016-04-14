import {Directive, ElementRef, Input, Component, OnInit} from 'angular2/core'
import {HTTP_PROVIDERS, JSONP_PROVIDERS}    from 'angular2/http'
import {Observable}       from 'rxjs/Observable'

import {PhotoService} from '../services/photo'

import {FeedView} from './FeedView'
import {Photo} from '../interface/photo'

// Let TypeScript know about the special SystemJS __moduleName variable
declare var __moduleName: string

@Component({
	moduleId: __moduleName,
	selector: 'photofeed',
	template:`
		<div>
            <h1>PUBLIC FEED <small>from Flickr, Yandex</small></h1>
            <FeedView [photos]="photos"></FeedView>
        </div>
	`,
	styleUrls:['./Container.css'],
	directives: [FeedView],
	providers: [
		HTTP_PROVIDERS,
        JSONP_PROVIDERS,
		PhotoService
	]
})

export class Container implements OnInit{
	photos: Observable<Photo[]>;
	@Input("msg") msg: string;
	errMsg: string;
	constructor(private _photoService: PhotoService){}
	ngOnInit(){
		this.getPhoto();
	}
	getPhoto(){
		this._photoService.getAll().subscribe((res)=>{
            this.photos=res[0].concat(res[1])
        })
	}
}
