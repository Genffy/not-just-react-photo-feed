import {ElementRef, Input, Component} from 'angular2/core'

@Component({
	selector: 'RadioButtonGroup',
	template:`
 		<div class="{{[].join(' ')}}">
 			<a id="{{label}}" href="#" class="{{className}}" (click)="select()">{{label}}</a>
		</div>
	`
})

export class RadioButtonGroup {
	
	@Input("key") key: string;

	constructor(el: ElementRef){
		console.log(el, this.key);
	}
	ngOnInit(){
		console.log("Hello RadioButtonGroup!");
	}
	select(){
		console.log("选中当前的按钮");
	}
}
