<template>
    <div>
        <radio-button-group class="buttons secondaryButton" v-bind:datas="columnsData" v-on:click='col' type="secondary"></radio-button-group>
        <radio-button-group class="buttons" v-bind:datas="sortParams" v-on:click='sort' type="default"></radio-button-group>
        <photo-grid v-bind:photos="photos" v-bind:column="column" InformationElement={InfoElement}></photo-grid>
    </div>
</template>
<script>
    import {loadFlickrPublicFeed, loadYandexPublicFeed} from '../actions/photos';
    import {photoStore} from '../stores'
    import PhotoGrid from './PhotoGrid.vue'
    import RadioButtonGroup from './RadioButtonGroup.vue'
    const columnsData = [
        {value : 1, label : 'x1'},
        {value : 2, label : 'x2'},
        {value : 3, label : 'x3'},
        {value : 5, label : 'x5'}];
    const sortParams = [
        {label : 'oldest', value : 'created-asc'},
        {label : 'newest', value : 'created-desc'},
        {label : 'title asc', value : 'title-asc'},
        {label : 'title desc', value : 'title-desc'}];
    export default {
        name: 'FeedView',
        data () {
            return {
                column: 2,
                photos: {},
                columnsData: columnsData,
                sortParams: sortParams
            }
        },
        components: {
            RadioButtonGroup,
            PhotoGrid
        },
        methods: {
            sort (event) {
                var value = event.target.attributes.value.nodeValue
                const [field, type] = value.split('-');
                const sign = type == 'asc' ? 1 : -1;
                this.photos = this.photos.slice().sort((a, b) => (+(a[field] > b[field]) || +(a[field] === b[field]) - 1) * sign);
            },
            col (event) {
                // get value
                var value = parseInt(event.target.attributes.value.nodeValue)
                this.column = value 
            },
            change () {
                this.photos = photoStore.getAll()
                console.log(this.photos);
            }
        },
        created () {
            photoStore.addChangeListener(this.change)
            loadFlickrPublicFeed()
            loadYandexPublicFeed()
        }
    }
</script>