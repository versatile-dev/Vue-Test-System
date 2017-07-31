<template>
  <div class='container'>
  	<HomeHeader />
  	<Test />
  	<hr />
  	<HomeFooter />
  </div>
</template>
<script>
import HomeHeader from '../components/HomeHeader/HomeHeader.vue'
import Test from '../components/Test/Test.vue'
import HomeFooter from '../components/HomeFooter/HomeFooter.vue'
export default {
  components: {
  	HomeHeader,
  	Test,
  	HomeFooter,
  }
}
</script>
