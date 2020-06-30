<template>
	<view class="box">
		<u-lazy-load v-for="(item,index) in list" :key="index" class="item" :image="item.src"></u-lazy-load>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					src: 'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg'
				},
				{
					src: 'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg'
				},
				{
					src: 'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg'
				},
				{
					// 这里图片不存在，会加载失败，显示错误的占位图
					src: 'xxx'
				},
				{
					src: 'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg'
				},
				{
					src: 'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg'
				},
				{
					src: 'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg'
				},
				{
					// 这里图片不存在，会加载失败，显示错误的占位图
					src: 'xxx'
				}
			]
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
.box {
	width: 100%;
	height: 100%;
	.item{
		width: 70%;
		margin-left: 15%;
	}
	
}
</style>
