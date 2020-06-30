<template>
	<view class="box">
		<h2>基本使用</h2>
		<u-link href="http://www.uviewui.com">学习uViewui官方网站</u-link>
		<h2>下划线</h2>
		<u-link href="http://www.uviewui.com" :under-line="true">link 带下划线</u-link>
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

<style lang="scss">
	.box{
		width: 100%;
		height: 100%;
		text-align: center;
	}
</style>
