<template>
	<view>{{ name }}</view>
</template>

<script>
export default {
	data() {
		return {
			name: ''
		};
	},
	onLoad(e) {
		this.name = e.option;
		uni.setNavigationBarTitle({
			title: e.option
		});
	}
};
</script>

<style lang="scss"></style>
