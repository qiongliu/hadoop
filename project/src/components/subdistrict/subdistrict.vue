<template>
	<div class="subdistrict">
		<target></target>
		<submission></submission>
		<cadre></cadre>
		<!-- <m-map></m-map> -->
	</div>
</template>

<script>
	import target from 'components/target/target'
	import submission from 'components/submission/submission'
	import mMap from 'components/m-map/m-map'
	import cadre from 'components/cadre/cadre'
	export default {
		components: {
			target,
			submission,
			mMap,
			cadre
		}
	}
</script>