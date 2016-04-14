import {ElementRef, Input, Component} from 'angular2/core';
import {Photo} from '../interface/photo'

@Component({
	selector: 'Info',
	template:`
		<div class="info">
            <h3>{{photo?.title}}</h3>
            <p>{{photo?.created|date}}</p>
            <p><a href="{{photo?.link}}">{{photo?.link}}</a></p>
            <p>tags: {{photo?.tags}}</p>
        </div>
	`,
	//styleUrls:['./Info.css']
})

export class Info {
	@Input("photo") photo: Photo;
	constructor(el: ElementRef){}
}
