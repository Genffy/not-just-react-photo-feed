import {ElementRef, Input, Component} from 'angular2/core';

@Component({
	selector: "[sayhello]",
	template:`
		<div className={styles.info}>
            <h3>{photo.title}</h3>
            <p>{date}</p>
            <p><a href={photo.link}>{photo.link}</a></p>
            <p>tags: {photo.tags}</p>
        </div>
	`
})

export class Info {

	@Input("msg") Msg: string;

	constructor(el: ElementRef){
		console.log(el, this.Msg);
	}
	ngOnInit(){
		console.log("Hello Info!");
	}
}
