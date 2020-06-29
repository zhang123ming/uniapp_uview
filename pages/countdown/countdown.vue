<template>
	<view class="countdown">
		<h2>基本的使用</h2>
		<u-count-down :timestamp="timestamp"></u-count-down>
		<h2>设置是否显示天 时 分 秒</h2>
		<u-count-down :timestamp="timestamp" :show-days="true" :show-hours="true" :show-minutes="true" :show-seconds="true"></u-count-down>
		<h2>倒计时分隔符</h2>
		<u-count-down :timestamp="timestamp" separator="zh" separator-size="30" separator-color="#66070d"></u-count-down>
		<h2>倒计时样式</h2>
		<u-count-down :timestamp="timestamp" :show-border="true" font-size="28" color="#660805" border-color="#909399"></u-count-down>
		<h2>倒计时执行的时机</h2>
		<u-count-down ref="uCountDown" :timestamp="timestamp" :autoplay="false"></u-count-down>
		<h2>获取当前倒计时的秒数</h2>
		<u-count-down ref="uCountDowns" :autoplay="false" :timestamp="timestamps" @change="change" @end="end"></u-count-down>
		<button type="success" plain  @click="getseconds">获取倒计时秒数</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			timestamp: 86400,
			timestamps:10
		};
	},
	onLoad(e) {
		setTimeout(() => {
			this.$refs.uCountDown.start();
			this.$refs.uCountDowns.start();
		}, 2000);
		uni.setNavigationBarTitle({
			title: e.option
		});
	},
	methods: {
		change(e) {
			uni.showToast({
				title:e.toString(),
				icon:"none",
				
			})
			
		},
		getseconds(){
		console.log(this.$refs.uCountDowns.seconds,)
		},
		end(e){
			
			uni.showToast({
				title:"定时器结束",
				icon:"none"
			})
		}
	}
};
</script>

<style lang="scss">
.countdown {
	width: 100%;
	height: 100%;
}
</style>
