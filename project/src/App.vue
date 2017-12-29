<template>
	<div id="app">
  	<m-top></m-top>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <m-footer></m-footer>
	</div>
</template>

<script>
  import axios from 'axios'
	import mTop from 'components/m-top/m-top'
	import mCarousel from 'components/carousel/carousel'
  import mFooter from 'components/m-footer/m-footer'
  export default {
    components: {
    	mTop,
    	mCarousel,
      mFooter
    }
  }
</script>
