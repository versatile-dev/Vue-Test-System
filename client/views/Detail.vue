<template>
  <div class='container'>
  	<Detail />
  	<hr />
  	<HomeFooter />
  </div>
</template>
<script>
import Detail from '../components/Detail/Detail.vue'
import HomeFooter from '../components/HomeFooter/HomeFooter.vue'
export default {
  components: {
  	Detail,
  	HomeFooter
  }
}
</script>
