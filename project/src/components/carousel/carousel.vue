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
      <CarouselItem>
          <div class="item">1</div>
      </CarouselItem>
      <CarouselItem>
          <div class="item">2</div>
      </CarouselItem>
      <CarouselItem>
          <div class="item">3</div>
      </CarouselItem>
      <CarouselItem>
          <div class="item">4</div>
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
          autoplaySpeed: 5000,
          dots: 'inside',
          radiusDot: false,
          trigger: 'click',
          arrow: 'always'
    		}
    	}
    }
	}
</script>

<style lang="scss">
	.item {
		background-color: #144025;
		height: 200px;
		line-height: 200px;
		width: 100%;
	}
</style>