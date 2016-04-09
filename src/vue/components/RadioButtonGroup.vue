<template>
    <div class="{{styles.buttons+' '+ (type =='secondary'?styles.secondaryButton:'')}}" >
        <a v-for="item in datas" value="{{item.value}}" class="{{select == item.value ? styles[className]:''}}"  v-on:click="itemClick(item)" href="#">{{item.label}}</a>
    </div>    
</template>
<script>
    import styles from './RadioButtonGroup.css'
    export default {
        name: 'RadioButtonGroup',
        data () {
            return {
                select: null,
                styles: styles,
                className: `${this.type}ButtonSelected`
            }
        },
        props: ['datas', 'type', 'value'],
        methods: {
            itemClick (item) {
                const eventType = this.type == 'secondary' ? 'col' : 'sort';
                this.select = item.value;
                this.$dispatch(eventType, item.value);
            }
        },
        created () {
            this.select = this.value
        }
    }
</script>