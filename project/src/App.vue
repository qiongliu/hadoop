<template>
	<div id="app">
  	<m-top></m-top>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
	</div>
</template>

<script>
	import mTop from 'components/m-top/m-top'
	import mCarousel from 'components/carousel/carousel'
  export default {
    components: {
    	mTop,
    	mCarousel
    }
  }
</script>
