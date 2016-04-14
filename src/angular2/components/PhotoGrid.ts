import {ElementRef, Input, Component} from 'angular2/core'

import {Info} from './Info'
import {Photo} from '../interface/photo'

@Component({
	selector: 'PhotoGrid',
	template:`
		<div>
			<div *ngFor="#photo of photos" class="imageGridItem" [style.width.%]="100/columns" key="photo?.id">
                <div class="imageWrapper {{'column'+columns+'Image'}}" (click)="fullShow(photo)" [style.backgroundImage]="'url('+photo?.src+')'"></div>
                <Info *ngIf="columns==1" [photo]="photo"></Info>
			</div>
			<a class="lightbox" [class.hide]="isHide" href="#" (click)="close()">
				<img src="{{bigSrc}}" />
			</a>
		</div>
	`,
	//styleUrls:['./PhotoGrid.css'],
	directives: [Info]
})

export class PhotoGrid {

	@Input("columns") columns: number;
    @Input("photos") photos: Photo[];
    bigSrc: string;
    isHide: boolean;
    
	constructor(el: ElementRef){}
	ngOnInit(){
        this.bigSrc = ''
        this.isHide = true
	}
	fullShow(photo){
        this.bigSrc = photo.bigSrc
        this.isHide = false
	}
	close(){
        this.bigSrc = ''
        this.isHide = true
	}
}
