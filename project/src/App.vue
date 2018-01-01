<template>
	<div id="app">
  	<m-top></m-top>
    <div class="sl-banner">
      <carousel></carousel>
      <login></login>
    </div>
    <keep-alive>
      <div class="sl-content comWidth">
        <router-view></router-view>
      </div>
    </keep-alive>
    <m-footer></m-footer>
	</div>
</template>

<script>
  import axios from 'axios'
	import mTop from 'components/m-top/m-top'
	import mCarousel from 'components/carousel/carousel'
  import mFooter from 'components/m-footer/m-footer'
  import Carousel from 'components/carousel/carousel'
  import Login from 'components/login/login'
  export default {
    components: {
      Carousel,
      Login,
    	mTop,
    	mCarousel,
      mFooter
    }
  }
</script>

<style lang="scss">
  .sl-banner {
    position: relative;
  }
  .sl-content {
    background-color: #fff;
    border-radius: 6px;
    margin-top: 12px;
    padding: 14px;
  } 
</style>
