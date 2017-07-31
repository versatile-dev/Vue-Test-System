<template>
  <div class='container'>
  	<HomeHeader />
  	<hr />
  	<Report />
  	<hr />
  	<HomeFooter />
  </div>
</template>
<script>
import HomeHeader from '../components/HomeHeader/HomeHeader.vue'
import Report from '../components/Report/Report.vue'
import HomeFooter from '../components/HomeFooter/HomeFooter.vue'
export default {
  components: {
  	HomeHeader,
  	Report,
  	HomeFooter,
  }
}
</script>
