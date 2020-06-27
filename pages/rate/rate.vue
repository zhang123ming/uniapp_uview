<template>
	<view class="rate">
		<h2>基本使用</h2>
		<u-rate :count="count" current="4" @change="change"></u-rate>
		<br />
		<h2>自定义样式</h2>
		<u-rate :count="count" current="3" @change="change" active-color="#effa0d" inactive-color="#b26003" gutter="10"></u-rate>
		<h2>自定义图标</h2>
		<u-rate :count="count" @change="change" current="6" active-icon="heart-fill" inactive-icon="heart"></u-rate>
	</view>
</template>

<script>
export default {
	data() {
		return {
			count: 10
		};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	},
	methods: {
		change(e) {
			console.log(e);
		}
	}
};
</script>

<style lang="scss">
.rate {
	width: 100%;
	height: 100%;
	padding: 20px;
	box-sizing: bor;
}
</style>
