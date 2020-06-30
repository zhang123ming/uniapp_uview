<template>
	<view class="box">
		<h2>基本使用</h2>
		<u-avatar :src="src"></u-avatar>
		<u-avatar :text="text"></u-avatar>
	<h2>头像类型</h2>
	<u-avatar :src="src" mode="square"></u-avatar>
	</view>
</template>

<script>
export default {
	data() {
		return {
		src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
						text: '无头像'
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
