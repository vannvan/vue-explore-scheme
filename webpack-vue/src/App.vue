<template>
	<div class="index">
		{{hello}}
		<Index/>
	</div>
</template>
<script>
import Index from './Index'
export default {
	data() {
		return {
			hello:'ahahahh'
		}
	},
	components: {
		Index
	},
	mounted() {

	}
}
</script>