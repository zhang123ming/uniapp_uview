<template>
	<view class="box">
		<h2>基本使用</h2>
		<u-divider >大漠孤烟直</u-divider>
	<h2>设置文字颜色</h2>
	<u-divider color="#fa3534">大漠孤烟直</u-divider>
	<h2>设置单边边线条宽度和颜色</h2>
	<u-divider color="#fa3534" half-width="200" border-color="#6d6d6d">姑苏城外寒山寺</u-divider>
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
