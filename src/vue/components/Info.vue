<template>
    <div class="info">
        <h3>{{photo.title}}</h3>
        <p>{{photo.created|date}}</p>
        <p><a :href="photo.link">{{photo.link}}</a></p>
        <p>tags: {{photo.tags}}</p>
    </div>
</template>
<script>
    export default {
        name: 'Info',
        data () {
            return {
                data: {}
            }
        },
        props: ['photo'],
        components: {

        },
        created () {
        }
    }
</script>