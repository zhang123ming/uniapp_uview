<template>
	<view>
		<u-empty text="所谓伊人,在水一方" mode="message"></u-empty>
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
