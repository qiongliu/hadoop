<template>
	<div id="app">
  	<m-top></m-top>
  	<Carousel 
  		v-model="carouselIndex"
  		:loop="loop",
  		:autoplay="autoPlay",
  		:autoplay-speed="sutoplaySpeed">
      <CarouselItem>
          <div class="demo-carousel">1</div>
      </CarouselItem>
      <CarouselItem>
          <div class="demo-carousel">2</div>
      </CarouselItem>
      <CarouselItem>
          <div class="demo-carousel">3</div>
      </CarouselItem>
      <CarouselItem>
          <div class="demo-carousel">4</div>
      </CarouselItem>
    </Carousel>
	</div>
</template>

<script>
	import mTop from 'components/m-top/m-top'
  export default {
      components: {
      	mTop
      },
      data () {
      	return {
      		carouselIndex: 0,
      		caarouselSetting: {

      		}
      	}
      }
  }
</script>
