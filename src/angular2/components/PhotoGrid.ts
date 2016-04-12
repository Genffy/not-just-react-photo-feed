import {ElementRef, Input, Component} from 'angular2/core'

import {Info} from './Info'

@Component({
	selector: "[sayhello]",
	template:`
		<div>
			<div className={classNames.join(' ')} style={style} key={photo.id}>
				<div >
					<div className={classNames.join(' ')} onClick={this.image_clickHandler(photo).bind(this)} style={style}></div>
					<Info photo={photo}/>
				</div>
			</div>
			<a href="#_" className={classNames.join(' ')} onClick={this.fullScreenImage_clickHandler.bind(this)}>
				<img src={src} />
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
}
