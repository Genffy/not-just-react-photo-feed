<template>
    <div>
        <div class="{{styles.imageGridItem}}" v-for="data in photos" track-by="$index" :style="{width: 100/column +'%'}">
            <div class="{{styles.imageWrapper+' '+styles['column'+column+'Image']}}" v-on:click="full(data)" :style="{backgroundImage:'url('+data.src+')'}"></div>
            <info v-if="isShowInfo" v-bind:photo='data'></info>
        </div>
        <a href="#" class="{{styles.lightbox + ''+ !fullImage? styles.info:''}}"  v-on:click="close">
            <img :src="fullImage && fullImage.bigSrc" />
        </a>
    </div>
</template>
<script>
    import Info from './Info.vue'
    import styles from './PhotoGrid.css'
    export default {
        name: 'PhotoGrid',
        data () {
            return {
                fullImage: null,
                styles: styles
            }
        },
        props: ['photos', 'column'],
        methods: {
            full (photo) {
                this.fullImage = photo
            },
            close () {
                this.fullImage = null
            }
        },
        computed: {
            isShowInfo () {
                return this.column == 1
            }
        },
        components: {
            Info
        },
        created () {
            
        }
    }
</script>