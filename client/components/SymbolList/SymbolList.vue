<template>
	<div class="row text-center">
	  <div class="col-md-3 col-sm-6 hero-feature" v-for="(item, index) in symbolList">
	    <div class="thumbnail">
	      <router-link :to="{ name: 'detail', params: { id: index } }" class="btn btn-default">
	      	<img :src="item.imageURL" :alt="item.english[0]">
	      </router-link>
	    </div>
	  </div>
	</div>
</template>
<script>
import axios from 'axios';
export default {
	created() {
		axios.get('data.json')
			.then(response => {
				this.$store.dispatch('getSymbolList', response.data);
			})
	},
	computed: {
		symbolList() {
			return this.$store.getters.symbolList
		}
	}
}
</script>
<style src="./style.css"></style>