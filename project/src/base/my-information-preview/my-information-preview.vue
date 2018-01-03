<template>
	<div class="my-information-preview">
		<p class="sl-pre-tips">预览：</p>
			<div class="sl-prev-information">
				<p class="sl-title">{{information.title}}</p>
				<img :src="preImg" alt="" v-if="information.uploadFile.length">
				<pre>{{information.content}}</pre>
				<div class="clearfix">
					<span class="sl-date fl">{{preDate}}</span>
					<span class="sl-department fr">{{preDepartment}}</span>
				</div>
			</div>
	</div>
</template>

<script>
	import {formatDate} from 'common/js/base'
	export default {
		props: {
			information: {
				type: Object,
				default: []
			}
		},
		computed: {
			preDate () {
				return formatDate(this.information.date)
			},
			preDepartment () {
				return this.information.department.join(" ")
			},
			preImg () {
				if (this.information.uploadFile.length) {
					return this.information.uploadFile[0]
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../common/css/variable.scss';
	.sl-pre-tips {
		color: $c-main;
		font-size: $fz-md;
		font-weight: 600;
	}
	.sl-prev-information {
		min-height: 400px;
		background-color: $c-bg;
		padding: 10px;
		font-size: $fz-sm;
		border-radius: 4px;
		pre {
			font-family: "Microsoft Yahei";
			white-space: pre-wrap;
		}
		img {
			width: 100%;
		}
		.sl-title {
			font-size: $fz-md;
		}
		.sl-title,.sl-date,.sl-department {
			font-weight: 600;
		}
	}
</style>