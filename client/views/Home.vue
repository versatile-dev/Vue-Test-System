<template>
  <div class='container'>
  	<HomeHeader />
  	<hr />
  	<SymbolList />
  	<HomeMenu />
  	<hr />
  	<HomeFooter />
  </div>
</template>
<script>
import HomeHeader from '../components/HomeHeader/HomeHeader.vue'
import SymbolList from '../components/SymbolList/SymbolList.vue'
import HomeMenu from '../components/HomeMenu/HomeMenu.vue'
import HomeFooter from '../components/HomeFooter/HomeFooter.vue'
export default {
  components: {
  	HomeHeader,
  	SymbolList,
  	HomeMenu,
  	HomeFooter,
  }
}
</script>
