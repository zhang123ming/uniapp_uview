<template>
	<view class="box">
		<h2>基本使用</h2>
		<u-cell-group>
			<block v-for="(item, index) in 100" :key="index"><u-cell-item :title="item"></u-cell-item></block>
		</u-cell-group>
		<!-- <u-back-top :scroll-top="scrollTop"></u-back-top> -->
		<!-- 改变返回按钮的出现时机 -->
		<!-- <u-back-top :scroll-top="scrollTop" top="500"></u-back-top> -->
		<!-- 自定义样式 -->
		<u-back-top :scrollTop="scrollTop" icon="arrow-up" :mode="mode" :icon-style="iconStyle"></u-back-top>
	</view>
</template>

<script>
export default {
	data() {
		return {
			scrollTop: 100,
			mode: 'square',
			iconStyle: {
				fontSize: '32rpx',
				color: '#2979ff',
				
			}
		};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	},
	onPageScroll(e) {
		this.scrollTop = e.scrollTop;
	}
};
</script>

<style lang="scss"></style>
