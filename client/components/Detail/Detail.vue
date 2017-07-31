<template>
	<div>
		<!--Language btns-->
		<div class="dropdown menu-bar">
      <router-link to="/" class="btn btn-primary" role="button">Home Page</router-link>
	    <button class="btn btn-primary btn-right pull-right" type="button" v-on:click="language='arabic'">Arabic</button>
	    <button class="btn btn-primary btn-right btn-margin pull-right mr-20" type="button" v-on:click="language='english'">English</button>
		</div> 
		<!-- Jumbotron Header -->
		<header class="jumbotron">
	    <h1>{{getTitle}}</h1>
		</header> 
		<!-- Page Features -->
		<div class="row text-center">
	    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div class="thumbnail">
          <div class="">
            <img src="img/Arafat.png" alt="..." class="img-thumbnail img-circle">
          </div>
        </div>
	    </div>
	    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 hero-feature">
        <div class="thumbnail">
          <div class="caption">
              <h2>{{getTitle}}</h2>
              <div v-html="getDescription"></div>
          </div>
        </div>
	    </div>
	    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 hero-feature">
        <div class="thumbnail">
          <div class="caption">
            <h2>Play audio explanation</h2>
            <audio controls controlsList="nodownload" class="audiocss">
              <source :src="getAudioPath" type="audio/mpeg" controls="controls">
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
	    </div>
		</div>
	</div>
</template>
<script>
export default {
  data() {
    return {
      language: 'english'
    }
  },
  computed: {
    getTitle() {
      return this.$store.getters.symbolList[this.$route.params.id][this.language][0]
    },
    getDescription() {
      let descriptionList = this.$store.getters.symbolList[this.$route.params.id][this.language]
      var description = ''
      descriptionList.forEach((item, index, array) => {
        if(index > 0)
          description += `<p>${descriptionList[index]}</p>`
      })
      return description
    },
    getAudioPath() {
      return this.$store.getters.symbolList[this.$route.params.id].soundURL
    }
  }
}
</script>
<style src="./style.css"></style>