<template>
	<div class="subdistrict">
		<target></target>
		<submission></submission>
		<!-- <m-map></m-map> -->
	</div>
</template>

<script>
	import target from 'components/target/target'
	import submission from 'components/submission/submission'
	import mMap from 'components/m-map/m-map'
	export default {
		components: {
			target,
			submission,
			mMap
		}
	}
</script>