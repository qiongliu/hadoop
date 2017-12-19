<template>
	<div class="carousel">
		<Carousel 
  		v-model="carouselIndex"
  		:loop="setting.loop"
  		:autoplay="setting.autoplay"
  		:autoplay-speed="setting.autoplaySpeed"
  		:dots="setting.dots"
  		:radius-dot="setting.radiusDot"
  		:trigger="setting.trigger"
  		:arrow="setting.arrow"
  		>
      <CarouselItem v-for="(item,index) in imgs" :key="index">
        <a href="javascript:;"><img :src="item" alt=""></a>
      </CarouselItem>
    </Carousel>
	</div>
</template>

<script>
	export default {
		data () {
    	return {
    		carouselIndex: 0,
    		setting: {
    			loop: true,
          autoplay: true,
          autoplaySpeed: 10000,
          dots: 'inside',
          radiusDot: false,
          trigger: 'click',
          arrow: 'always'
    		},
        imgs: [
          require('./banner_01.jpg'),
          require('./banner_02.jpg'),
          require('./banner_03.jpg')
        ]
    	}
    }
	}
</script>

<style lang="scss">
  .carousel {
    a {
      display: block;
    }
    img {
      display: block;
      height: 230px;
      width: 100%;
    }
  }
</style>