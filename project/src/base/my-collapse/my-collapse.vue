<template>
	<div ref="myCollapse" class="my-collapse">
		<slot ref='slotHeight'></slot>
		<i v-show="moreFlag" @click="clickMore('up')" class="sl-collapse-more sl-collapse-up"></i>
		<i v-show="!moreFlag" @click="clickMore('down')" class="sl-collapse-more sl-collapse-down"></i>
	</div>
</template>

<script>
	export default {
		props: {
			maxHeight: {
				type: Number,
				default: 0
			}
		},
		data () {
			return {
				moreFlag: true
			}
		},
		mounted () {
			this.$refs.myCollapse.style.height = this.maxHeight + 'px'
		},
		methods: {
			clickMore (flag) {
				if (flag === 'up') {
					this.$refs.myCollapse.style.height = this.$slots.default[0].elm.clientHeight + 20 + 'px'
				} else {
					this.$refs.myCollapse.style.height = this.maxHeight + 'px'
				}
				this.moreFlag = !this.moreFlag
			}
		}
	}
</script>

<style lang="scss">
	.my-collapse {
		overflow: hidden;
		padding-bottom: 20px;
		position: relative;
		transition: height 2s;
		.sl-collapse-more {
			width: 100%;
			height: 20px;
			text-align: center;
			position: absolute;
			bottom: 0;
			background-color: #fff;
	    box-shadow: 0 0 26px 10px #fff;
	    cursor: pointer;
			&:after {
				position: absolute;
				top: 4px;
				content: ' ';
				width: 10px;
				height: 10px;
				line-height: 0;
				font-size: 0;
				border: 1px solid #bbb;
				transform: rotate(45deg);
			}
		}
		.sl-collapse-up {
			&:after {
				border-top: none;
				border-left: none;
			}
		}
		.sl-collapse-down {
			&:after {
				border-bottom: none;
				border-right: none;
			}
		}
	}
</style>