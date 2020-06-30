<template>
	<view class="box">
		<h2>基本使用</h2>
		<u-gap height="20" bg-color="#bbb"></u-gap>
	</view>
</template>

<script>
export default {
	data() {
		return {
		
		};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	}
};
</script>

<style lang="scss"></style>
