import {ElementRef, Input, Component} from 'angular2/core'

import {Info} from './Info'

@Component({
	selector: 'PhotoGrid',
	template:`
		<div>
			<div className="" style="style" key="photo.id">
				<div >
					<div className="{{[].join(' ')}}" (click)="fullShow()" style="style"></div>
					<Info photo="{{photo}}"></Info>
				</div>
			</div>
			<a href="#_" className="{{[].join(' ')}}" (click)="close()">
				<img src="{{src}}" />
			</a>
		</div>
	`,
	directives: [Info]
})

export class PhotoGrid {

	@Input("msg") Msg: string;

	constructor(el: ElementRef){
		console.log(el, this.Msg);
	}
	ngOnInit(){
		console.log("Hello PhotoGrid!");
	}
	fullShow(){
		console.log("全屏显示");
	}
	close(){
		console.log("关闭全屏显示");
	}
}
