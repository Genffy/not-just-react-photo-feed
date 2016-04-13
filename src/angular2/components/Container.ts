import {Directive, ElementRef, Input, Component, OnInit} from 'angular2/core'
import {HTTP_PROVIDERS}    from 'angular2/http'

import {PhotoService} from '../services/photo'

import {FeedView} from './FeedView'
import {Photo} from '../interface/photo'
@Component({
	selector: 'photofeed',
	template:`
		<div>
            <h1>PUBLIC FEED <small>from Flickr, Yandex</small></h1>
            <FeedView photos="photos"></FeedView>
        </div>
	`,
	directives: [FeedView],
	providers: [
		HTTP_PROVIDERS,
		PhotoService,
	]
})

export class Container implements OnInit{
	photos: Photo[];
	@Input("msg") msg: string;
	errMsg: string;

	constructor(private _photoService: PhotoService){
		console.log(this.msg);
	}
	ngOnInit(){
		console.log("Hello Contailer!");
		this.getPhoto();
	}
	getPhoto(){
		let data = this._photoService.getAll()
		console.log(data)
	}
	change() {

		console.log("chang event")
	}
}
