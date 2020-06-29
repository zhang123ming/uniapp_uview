<template>
	<view class="toast"></view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad(e) {
	
		uni.setNavigationBarTitle({
			title: e.option
		});
	},
	methods: {
	
	}
};
</script>

<style lang="scss">
.toast {
	width: 100%;
	height: 100%;
}
</style>
