import {ElementRef, Input, Component} from 'angular2/core'

import {RadioButtonGroup} from './RadioButtonGroup'
import {PhotoGrid} from './PhotoGrid'

@Component({
	selector: 'FeedView',
	template:`
		<div>
            <RadioButtonGroup items="columnsData" value="columns" (click)="btnClick($event)" type="secondary"></RadioButtonGroup>
            <RadioButtonGroup items="sortParams" value="order"  (click)="btnClick($event)" type="default"></RadioButtonGroup>
           	<PhotoGrid photos="sortedPhotos" columns="columns" InformationElement="InfoElement"></PhotoGrid>
        </div>
	`,
	directives: [RadioButtonGroup,PhotoGrid]
})

export class FeedView {

	@Input("photos") photos: string;

	constructor(el: ElementRef){
		console.log(el, this.photos);
	}
	ngOnInit(){
		console.log("Hello FeedView!");
	}
	btnClick(event: any){
		console.log("你点到我了啊",event.target.type);	
	}
}
