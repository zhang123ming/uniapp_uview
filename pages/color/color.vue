<template>
	<view class="color">未写入,请浏览其它页面...</view>
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
.color {
	width: 100%;
	height: 100%;
	font-size: 20px;
	font-weight: bold;
	color: $u-type-success;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
