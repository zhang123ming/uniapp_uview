<template>
	<view class="countto">
		<h2>基本使用</h2>
		<u-count-to :start-val="30" :end-val="500"></u-count-to>
		<h2>设置滚动相关参数</h2>
		<u-count-to :start-val="0" :end-val="500" :duration="5000" :use-easing="false"></u-count-to>
		<h2>是否显示小数位</h2>
		<u-count-to :start-val="0" :end-val="500.25" :decimals="2"></u-count-to>
		<h2>千位分隔符</h2>
		<u-count-to :end-val="15423123.12" separator="," :decimals="2"></u-count-to>
	</view>
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
	}
};
</script>

<style lang="scss">
.countto {
	width: 100%;
	height: 100%;
}
</style>
