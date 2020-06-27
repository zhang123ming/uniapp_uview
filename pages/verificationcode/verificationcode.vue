<template>
	<view class="ver">
		<u-toast ref="uToast"></u-toast>
		<u-verification-code :seconds="seconds" @end="end" @start="start" ref="uCode" keep-running unique-key="page-a" @change="codeChange"></u-verification-code>
		<u-button type="info" shape="circle" plain @tap="getCode">{{ tips }}</u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tips: '',
			seconds: 50
		};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	},
	methods: {
		codeChange(text) {
			this.tips = text;
		},
		end() {
			this.$u.toast('倒计时结束');
		},
		start() {
			this.$u.toast('倒计时开始');
		},
		getCode() {
			if (this.$refs.uCode.canGetCode) {
				uni.showLoading({
					title: '正在获取验证码'
				});
				setTimeout(() => {
					uni.hideLoading();
					this.$u.toast('验证码已发送');
					this.$refs.uCode.start();
				}, 1500);
			} else {
				this.$u.toast('倒计时结束在发送');
			}
		}
	}
};
</script>

<style lang="scss">
.ver {
	width: 100%;
	height: 100%;
	padding: 20px;
	box-sizing: border-box;
}
</style>
