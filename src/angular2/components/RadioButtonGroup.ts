import {ElementRef, Input, Component, Output, EventEmitter} from 'angular2/core'

import {Button} from '../interface/buttonItem'

@Component({
	selector: 'RadioButtonGroup',
	template:`
 		<div class="buttons" [ngClass]="{secondaryButton: type=='secondary', defaultButton: type=='default'}">
 			<a *ngFor="#item of items" href="#" [class.selected]="item.value== value" (click)="navSelect(item)">{{item.label}}</a>
		</div>
	`
})

export class RadioButtonGroup {
	@Input("items") items: Button[];
    @Input("value") value: any;
    @Input("type") type: string;
    
    @Output() selectRequest = new EventEmitter();
    
	constructor(el: ElementRef){
		console.log(el, this.items);
	}
	ngOnInit(){
		console.log("Hello RadioButtonGroup!");
	}
	navSelect(item:Button){
        this.selectRequest.emit({data: item, type: this.type})
	}
}
