<template>
    <h1>PUBLIC FEED <small>from Flickr, Yandex</small></h1>
    <feed-view></feed-view>
</template>
<script>
    import styles from './Container.css'
    import FeedView from './FeedView.vue'
    export default {
        name: 'Container',
        data () {
            return {
                photos: {},
                styles: styles
            }
        },
        components: {
            FeedView,
            Comment
        },
        methods: {
        
        },
        created () {
            
        }
    }
</script>