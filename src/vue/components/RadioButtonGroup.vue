<template>
    <div>
        <a v-for="item in datas" value="{{item.value}}" href="#">{{item.label}}</a>
    </div>
</template>
<script>
    export default {
        name: 'RadioButtonGroup',
        data () {
            return {
            }
        },
        props: ['datas'],
        components: {
        },
        created () {
        }
    }
</script>