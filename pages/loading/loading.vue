<template>
	<view>
		<h2>基本使用</h2>
		<u-loading mode="circle"></u-loading>
		<u-loading mode="flower"></u-loading>
		<h2>动画颜色</h2>
		<u-loading color="red" ></u-loading>
		<h2>动画尺寸</h2>
		<u-loading size="50" color="#aa00ff" mode="circle"></u-loading>
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
