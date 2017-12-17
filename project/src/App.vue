<template>
	<div id="app">
  	<m-top></m-top>
  	<mCarousel></mCarousel>
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
