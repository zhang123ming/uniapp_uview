<template>
	<view class="box">
		<h2>基本使用</h2>
		<u-section title="今日热门" sub-title="查看更多"></u-section>
		<h2>是否显示右边内容</h2>
	<u-section title="今日热门" :right="false" sub-title="查看更多"></u-section>
	<h2>是否显示左边的竖条</h2>
	<u-section title="今日热门" :show-line="false" sub-title="查看更多"></u-section>
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

<style lang="scss">
	.box{
		width: 100%;
		height: 100%;
		padding: 10px;
		box-sizing: border-box;
	}
</style>
