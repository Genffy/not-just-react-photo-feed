import Vue from 'vue';
import Container from './components/Container.vue'
import './app.css';

Vue.filter('date', function (value) {
  return new Date(value).toLocaleString();
})
new Vue({
	el: '#vue',
	data: {
		message: 'Hello Vue.js!'
	},
    components: {
        'container': Container
    }
})