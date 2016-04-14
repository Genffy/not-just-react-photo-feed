import {ElementRef, Input, Component} from 'angular2/core'

import {RadioButtonGroup} from './RadioButtonGroup'
import {PhotoGrid} from './PhotoGrid'
import {Button} from '../interface/buttonItem'
import {Photo} from '../interface/photo'

@Component({
    selector: 'FeedView',
	template:`
		<div>
            <RadioButtonGroup [items]="columnsData" [value]="columns" (selectRequest)="btnClick($event)" type="secondary"></RadioButtonGroup>
            <RadioButtonGroup [items]="sortParams" [value]="order" (selectRequest)="btnClick($event)" type="default"></RadioButtonGroup>
           	<PhotoGrid [photos]="sortedPhotos" [columns]="columns" InformationElement="InfoElement"></PhotoGrid>
        </div>
	`,
    //styleUrls:['./FeedView.css'],
    directives: [RadioButtonGroup,PhotoGrid]    
})
export class FeedView {
    columnsData = [
        {value : 1, label : 'x1'},
        {value : 2, label : 'x2'},
        {value : 3, label : 'x3'},
        {value : 5, label : 'x5'}];
    sortParams = [
        {label : 'oldest', value : 'created-asc'},
        {label : 'newest', value : 'created-desc'},
        {label : 'title asc', value : 'title-asc'},
        {label : 'title desc', value : 'title-desc'}]
        
    columns: string;
    order: string;
    sortedPhotos: Photo[];
    
	@Input("photos") photos: Photo[];
	constructor(el: ElementRef){}
	ngOnInit(){
        // 初始化数据
		this.columns = '3'
	}
    ngOnChanges(){
        this.sortedPhotos = this.photos
    }
    sortPhoto(data: string){
        const [field, type] = data.split('-');
        const sign = type == 'asc' ? 1 : -1;
        this.order = data
        this.sortedPhotos = this.photos.slice().sort((a, b) => (+(a[field] > b[field]) || +(a[field] === b[field]) - 1) * sign);
    }
	btnClick(data: any){
        if(data){
            if(data.type == 'secondary'){
                this.columns = data.data.value
            }
            if(data.type == 'default'){
                // sort
                this.sortPhoto(data.data.value);
            }
        }
	}
}
