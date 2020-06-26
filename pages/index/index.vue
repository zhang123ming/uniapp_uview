<template>
	<view class="content">
		<u-sticky>
			<!-- 只能有一个根元素 -->
			<view class="sticky">宝剑锋从磨砺出,梅花香自苦寒来</view>
		</u-sticky>
		<u-icon name="photo"></u-icon>

		<u-tabs-swiper v-for="(item,index) in 100" :key="index" ref="tabs" :list="list" :is-scroll="true"></u-tabs-swiper>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					name: '待收货'
				},
				{
					name: '待付款'
				},
				{
					name: '待评价'
				},
				{
					name: '待收货'
				},
				{
					name: '待付款'
				},
				{
					name: '待评价'
				},
				{
					name: '待收货'
				},
				{
					name: '待付款'
				},
				{
					name: '待评价'
				}
			]
		};
	},
	onLoad() {},
	methods: {}
};
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.sticky {
		width: 750rpx;
		height: 120rpx;
		background-color: #2979ff;
		color: #fff;
		padding: 24rpx;
	}
</style>
