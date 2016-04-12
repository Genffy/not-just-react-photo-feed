import {ElementRef, Input, Component} from 'angular2/core'

@Component({
	selector: "[sayhello]",
	template:`
 		<div className={[styles.buttons, typeStyle].join(' ')}>
 			<a key={item.value+item.label} href="#" className={className} onClick={this.onClick(item.value).bind(this)}>{item.label}</a>
		</div>
	`
})

export class RadioButtonGroup {
		@Input("msg") Msg: string;

	constructor(el: ElementRef){
		console.log(el, this.Msg);
	}
	ngOnInit(){
		console.log("Hello RadioButtonGroup!");
	}
}
