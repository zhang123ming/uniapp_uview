<template>
	<view class="box">
		<h1>请关闭网络体验效果</h1>
		<u-no-network></u-no-network>
	</view>
</template>

<script>
export default {
	data() {
		return {
		
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
