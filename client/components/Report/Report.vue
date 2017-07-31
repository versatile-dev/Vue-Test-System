<template>
	<div class="well text-center">
  	<h1 class="title">Report ( {{getMark}} / 10 )</h1>
  	<div class="row text-left">
  		<div class="col-sm-offset-3 col-sm-3">
		  	<p v-for="(item, index) in getTestData(true)">
		  		{{index+1}}.    {{item.selectedAnswer}} : 
		  		<span v-if="item.selectedAnswer == item.correctAnswer" class="correct">
		  			<span class="glyphicon glyphicon-ok-sign"></span>
		  		</span>
		  		<span v-else class="incorrect">
		  			<span class="glyphicon glyphicon-remove-sign"></span>
		  		</span>
		  	</p>
		</div>
  		<div class="col-sm-offset-1 col-sm-3">
		  	<p v-for="(item, index) in getTestData(false)">
		  		{{index + 6}}.    {{item.selectedAnswer}} : 
		  		<span v-if="item.selectedAnswer == item.correctAnswer" class="correct">
		  			<span class="glyphicon glyphicon glyphicon-ok-sign"></span>
		  		</span>
		  		<span v-else class="incorrect">
		  			<span class="glyphicon glyphicon-remove-sign"></span>
		  		</span>
		  	</p>
		</div>
	</div>
    <button class="btn btn-primary btn-home" v-on:click="onHome">Home Page</button>
  </div>
</template>
<script>
export default {
	computed: {
		getMark() {
			let answerList = this.$store.getters.answerList
			let count = 0
			answerList.forEach((item, index, arr) => {
				if(item.selectedAnswer == item.correctAnswer)
					count ++;
			})
			return count
		}
	},
	methods: {
		onHome() {
			this.$store.dispatch('clearStore')
			this.$router.replace('/')
		},
		getTestData(isFirst) {
			let answerList = this.$store.getters.answerList
			if(isFirst)
				return answerList.slice(0, 5)
			if(answerList.length < 5)
				return []
			return answerList.slice(5, answerList.length)
		}
	}
}
</script>
<style src="./style.css" scoped></style>