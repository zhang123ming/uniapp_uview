<template>
	<view class="lineProgress">
		<h2>基本使用</h2>
		<u-line-progress active-color="#2979ff" :percent="percent"></u-line-progress>
		<h2>设置动画效果</h2>
		<u-line-progress :striped="true" :percent="percent" :striped-active="true"></u-line-progress>
		<h2>设置进度条内部显示百分比值</h2>
		<u-line-progress :percent="percent" :show-percent="true"></u-line-progress>
		<h2>修改进度条样式</h2>
		<u-line-progress :percent="percent" :round="false" active-color="#ff9900"></u-line-progress>
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
			if (val == 90) clearInterval(this.timer);
			return false;
		}
	}
};
</script>

<style lang="scss">
.lineProgress {
	width: 100%;
	height: 100%;
}
</style>
