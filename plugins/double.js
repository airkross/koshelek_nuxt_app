export default function doubleFilter(num) {
    
}

import Vue from 'vue'

Vue.filter('double', num => {
	return Math.floor(num * 100000) / 100000
})