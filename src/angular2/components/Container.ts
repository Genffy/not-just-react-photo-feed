import {Directive, ElementRef, Input, Component} from 'angular2/core'

import {FeedView} from './FeedView'

@Component({
	selector: "[sayhello]",
	template:`
		<div>
            <h1>PUBLIC FEED <small>from Flickr, Yandex</small></h1>
            <FeedView photos={photos}/>
        </div>
	`,
	directives: [FeedView]
})

export class Container {

	@Input("msg") Msg: string;

	constructor(el: ElementRef){
		console.log(el, this.Msg);
	}
	ngOnInit(){
		console.log("Hello Contailer!");
	}
}
