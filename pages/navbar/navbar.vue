<template>
	<view class="box">
		<u-navbar back-text="返回" title="自定义导航栏" :background="bgc"></u-navbar>
	</view>
</template>

<script>
export default {
	data() {
		return {
		bgc: '#001f3f'
		};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	}
};
</script>

<style lang="scss"></style>
