<template>
	<div class="row text-center">
	  <div class="col-md-6 hero-feature">
	    <div class="jumbotron hero-spacer">
	      <div>
	        <h3>Test yourself</h3>
	        <p>Are you ready to test your knowledge of these symbols?</p>
	        <p>
	          <router-link to="/test" class="btn btn-default">Go to the test!</router-link>
	        </p>
	      </div>
	    </div>
	  </div>
	  <div class="col-md-6 hero-feature">
	    <div class="jumbotron hero-spacer">
	      <div>
	        <h3>Need help?</h3>
	        <p>If you need any sort of help conatct the appropriate phone number (Free)</p>
	        <p>
	          <router-link to="/help" class="btn btn-default">Help me</router-link>
	        </p>
	      </div>
	    </div>
	  </div>
	</div>
</template>
<script>
export default {
}
</script>
<style src="./style.css" scoped></style>