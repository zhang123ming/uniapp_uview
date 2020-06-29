<template>
	<view class="circleProgress">
		<h2>基本使用</h2>
		<u-circle-progress active-color="#2979ff" :percent="percent">
			<view class="u-progress-content">
				<view class="u-progress-dot"></view>
				<text class="u-progress-info">查找中</text>
			</view>
		</u-circle-progress>
		<h2>设置圆环的动画时间</h2>
		<u-circle-progress type="primary" :percent="percent" duration="5000">
			<view class="u-progress-content">
				<view class="u-progress-dot"></view>
				<text class="u-progress-info">查找中</text>
			</view>
		</u-circle-progress>
		<h2>更改圆环的样式</h2>
	</view>
</template>

<script>
export default {
	data() {
		return {
			percent: 0,
			timer: null
		};
	},
	onLoad(e) {
		const self = this;

		this.timer = setInterval(function() {
			self.percent++;
		}, 50);
		uni.setNavigationBarTitle({
			title: e.option
		});
	},
	watch: {
		percent(val) {
			if (val == 90) {
				clearInterval(this.timer);
				return false;
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.circleProgress {
	width: 100%;
	height: 100%;
	.u-progress-content {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.u-progress-dot {
		width: 16rpx;
		height: 16rpx;
		border-radius: 50%;
		background-color: #fb9126;
	}

	.u-progress-info {
		font-size: 28rpx;
		padding-left: 16rpx;
		letter-spacing: 2rpx;
	}
}
</style>
