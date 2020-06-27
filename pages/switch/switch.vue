<template>
	<view class="switch"><u-switch v-model="checked" @change="change" :loading="isTrue"></u-switch></view>
</template>

<script>
export default {
	data() {
		return {
			checked: false,
			isTrue: false
		};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	},
	methods: {
		change(e) {
			const self = this;
			if (e) {
				self.isTrue = true;
				setTimeout(function() {
					self.isTrue = false;
				}, 2000);
			} else {
				self.isTrue = false;
			}
		}
	}
};
</script>

<style lang="scss">
.switch {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
