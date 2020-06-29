<template>
	<view class="box">
		<block v-for="(item, index) in 100" :key="index">
			<u-sticky offset-top="50"><view class="sticky"  v-if="index == 30">宝剑锋从磨砺出，梅花来自苦寒来</view></u-sticky>
			<view class="item">{{ item }}</view>
		</block>
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
	.box{
		width: 100%;
		.item{
			width: 1005;
			height: 40px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 20px;
			font-weight: 700;
			border-bottom: 1px solid #ddd;
		}
	}
</style>
