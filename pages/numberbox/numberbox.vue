<template>
	<view class="numberbox">
		<h2>基本设置</h2>
		<u-number-box v-model="value" @change="change"></u-number-box>
		<h2>步长设置</h2>
		<u-number-box v-model="value" @change="change" :step="2"></u-number-box>
		<h2>限制输入范围</h2>
		<u-number-box :min="1" :max="100"></u-number-box>
		<h2>自定义大小</h2>
		<u-number-box :input-width="50" :input-height="30"></u-number-box>
	</view>
</template>

<script>
export default {
	data() {
		return {
			value: 0
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
			uni.showToast({
				title: e.value.toString(),
				icon: 'none'
			});
		}
	}
};
</script>

<style lang="scss">
.numberbox {
	width: 100%;
	height: 100%;
	padding: 20px;
	box-sizing: border-box;
}
</style>
