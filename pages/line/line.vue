<template>
	<view class="box">
		<h2>基本使用</h2>
		<u-line color="red"></u-line>
		<h2>线条类型</h2>
		<u-line color="blue" border-style="solid"></u-line><br>
		<u-line color="blue" border-style="dashed"></u-line><br>
		<u-line color="blue" border-style="dotted"></u-line>
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

<style lang="scss"></style>
