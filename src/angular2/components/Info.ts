import {ElementRef, Input, Component} from 'angular2/core';
import {Photo} from '../interface/photo'
@Component({
	selector: 'Info',
	template:`
		<div class="{{styles.info}}">
            <h3>{{photo.title}}</h3>
            <p>{{date}}</p>
            <p><a href="{{photo.link}}">{{photo.link}}</a></p>
            <p>tags: {{photo.tags}}</p>
        </div>
	`
})

export class Info {

	@Input("photo") photo: Photo;

	constructor(el: ElementRef){
		console.log(el, this.Msg);
	}
	ngOnInit(){
		console.log("Hello Info!");
	}
}
