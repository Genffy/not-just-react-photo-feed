import {ElementRef, Input, Component} from 'angular2/core'

import {RadioButtonGroup} from './RadioButtonGroup'
import {PhotoGrid} from './PhotoGrid'

@Component({
	selector: "[sayhello]",
	template:`
		<div>
            <RadioButtonGroup items={columnsData} value={columns} onClick={this.onClick.bind(this)} type="secondary"/>
            <RadioButtonGroup items={sortParams} value={order} onClick={this.onSortClick.bind(this)} type="default"/>
           	<PhotoGrid photos={sortedPhotos} columns={columns} InformationElement={InfoElement}/>
        </div>
	`,
	directives: [RadioButtonGroup,PhotoGrid]
})

export class FeedView {

	@Input("msg") Msg: string;

	constructor(el: ElementRef){
		console.log(el, this.Msg);
	}
	ngOnInit(){
		console.log("Hello FeedView!");
	}
}
