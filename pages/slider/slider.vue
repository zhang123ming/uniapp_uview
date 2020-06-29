<template>
	<view class="slider">
		<h2>slider基本使用</h2>
		<u-slider v-model="value1"></u-slider>
		<h2>设置最大值和最小值</h2>
		<u-slider v-model="value1" min="30" max="80"></u-slider>
		<h2>设置步进值</h2>
		<u-slider v-model="valueStep" step="20" min="10" max="100"></u-slider>
		<h2>自定义按钮的内容和样式</h2>
		<u-slider v-model="value2" :use-slot="true">
			<!-- 多加一层view 否则样式无效 -->
			<view>
				<view class="badge-button">{{ value2 }}</view>
			</view>
		</u-slider>
		<h2>自定义滑动选择器整体样式</h2>
		<u-slider v-model="value3" blockWidth="30" blockColor="red" inactiveColor="blue" activeColor="yellow" height="10"></u-slider>
	</view>
</template>

<script>
export default {
	data() {
		return {
			value1: 20,
			valueStep: 40,
			value2: 20,
			value3: 30
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
.slider {
	width: 100%;
	height: 100%;
	padding: 0 20px;
	box-sizing: border-box;
	.badge-button {
		padding: 4rpx 6rpx;
		background-color: $u-type-error;
		color: #fff;
		border-radius: 10rpx;
		font-size: 22rpx;
		line-height: 1;
	}
}
</style>
