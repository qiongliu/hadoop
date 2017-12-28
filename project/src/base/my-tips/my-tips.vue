<template>
	<div class="my-tips">
		<slot></slot>
		<p v-show="show">{{content}}</p>
	</div>
</template>

<script>
	export default {
		props: {
			content: {
				type: String,
				default: '这是默认内容！'
			},
			isShow: {
				type: Boolean,
				default: false
			},
			showTime: {
				type: Number,
				default: 2000
			}
		},
		data () {
			return {
				show: false,
				timer: 0
			}
		},
		watch: {
			isShow (newVal,oldVal) {
				this.show = true
				clearTimeout(this.timer)
				this.timer = setTimeout(() => {
					this.show = false
				},this.showTime)
			}
		}
	}
</script>

<style lang="scss">
	.my-tips {
		position: relative;
		p {
			padding: 4px 10px;
			background-color: #ed3f14;
			color: #fff;
			position: absolute;
			z-index: 999;
			border-radius: 4px;
			top: -34px;
			&:after {
				content: '';
				font-size: 0;
				line-height: 0;
				border-width: 4px;
				border-style: solid;
				border-color: #ed3f14 transparent transparent transparent;
				position: absolute;
				bottom: -8px;
				left: 10px;
			}
		}
	}
</style>