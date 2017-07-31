<template>
  <div class="text-center">
  	<h3>Please select correct answer. ( {{problemNumber}} / {{problemCount}} )</h3>
  	<img :src="problem.imageURL" alt="Image" class="thumbnail" />
		<div class="dropdown">
			<span v-for="(answer, index) in answerList" class="answer">
				<input type="radio" name="answer" :value="answer" v-on:click="onSelectAnswer(index, answer)" :checked="checkList[index]"/>
				{{answer}}
			</span>
		</div>
	  <button class="btn btn-primary next" v-on:click="onNext" :disabled="!selectedAnswer">Next</button>
  </div>
</template>
<script>
export default {
  data() {
  	return {
  		problemNumber: 1,
      problemCount: 10,
  		problem: null,
  		answerList: null,
  		checkList: [false, false, false],
  		selectedAnswer: false,
  		correctCount: 0,
  	}
  },
  created() {
  	this.problem = this.getProblem()
  	this.answerList = this.getAnswerList()
  },
  methods: {
  	getProblem() {
  		let symbolList = this.$store.getters.symbolList
  		let symbolCount = symbolList.length
  		let randomIndex = parseInt(Math.random() * symbolCount)
  		return symbolList[randomIndex]
  	},
  	getAnswerList() {
  		let symbolList = this.$store.getters.symbolList
  		let symbolCount = symbolList.length
  		var indexList = []
  		var answerList = []
  		var answerCount = 3
  		var i = 0
  		for(i = 0;i < symbolCount;i ++)
  			indexList.push(i)
  		for(i = 0;i < symbolCount * 5;i ++) {
  			let index1 = parseInt(Math.random() * symbolCount)
  			let index2 = parseInt(Math.random() * symbolCount)
  			let temp = indexList[index1]
  			indexList[index1] = indexList[index2]
  			indexList[index2] = temp
  		}	
  		for(i = 0;i < answerCount;i ++) {
  			let answer = symbolList[indexList[i]].english[0]
  			if(answer != this.problem.english[0])
  				answerList.push(answer)
  		}
  		if(answerList.length == answerCount)
  			answerList = answerList.slice(0, answerCount - 1)
  		i = parseInt(Math.random() * answerCount)
  		answerList.splice(i, 0, this.problem.english[0])
  		return answerList
  	},
  	onNext() {
      this.$store.dispatch('addAnswerItem', {
        selectedAnswer: this.selectedAnswer,
        correctAnswer: this.problem.english[0]
      });
  		if(this.problemNumber == this.problemCount) {
        this.$router.replace('/report')
  			return;
  		}
  		if(this.selectedAnswer == this.problem.english[0])
  			this.correctCount ++
  		this.problemNumber ++
  		this.problem = this.getProblem()
  		this.answerList = this.getAnswerList()
  		this.selectedAnswer = false
  		this.checkList = [false, false, false]
  	},
  	onSelectAnswer(index, answer) {
  		this.selectedAnswer = answer
  		this.checkList.forEach((item, i, arr) => {
  			arr[i] = (i == index)
  		})
  	}
  }
}		
</script>
<style src="./style.css" scoped=""></style>