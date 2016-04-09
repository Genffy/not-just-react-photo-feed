<template>
    <div>
        <radio-button-group v-bind:datas="columnsData" v-bind:value="column" type="secondary"></radio-button-group>
        <radio-button-group v-bind:datas="sortParams" v-bind:value="sort" type="default"></radio-button-group>
        <photo-grid v-bind:photos="photos" v-bind:column="column"></photo-grid>
    </div>
</template>
<script>
    import {loadFlickrPublicFeed, loadYandexPublicFeed} from '../../common/actions/photos';
    import {photoStore} from '../../common/stores'
    import PhotoGrid from './PhotoGrid.vue'
    import RadioButtonGroup from './RadioButtonGroup.vue'
    import styles from './FeedView.css'
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
                sort: null,
                photos: {},
                columnsData: columnsData,
                sortParams: sortParams,
                styles: styles
            }
        },
        components: {
            RadioButtonGroup,
            PhotoGrid
        },
        events: {
            sort (data) {
                const [field, type] = data.split('-');
                const sign = type == 'asc' ? 1 : -1;
                this.sort = data
                this.photos = this.photos.slice().sort((a, b) => (+(a[field] > b[field]) || +(a[field] === b[field]) - 1) * sign);
            },
            col (data) {
                this.column = data 
            }
        },
        methods: {
            change () {
                this.photos = photoStore.getAll()
            }
        },
        created () {
            photoStore.addChangeListener(this.change)
            loadFlickrPublicFeed()
            loadYandexPublicFeed()
        }
    }
</script>