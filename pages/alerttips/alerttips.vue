<template>
	<view class="alerttips">
		<h2>基本使用</h2>
		<u-alert-tips type="warning" :title="title" :description="description"></u-alert-tips>
		<h2>带图标</h2>
		<u-alert-tips type="success" :title="title" :description="description" :show-icon="true"></u-alert-tips>
		<h2>可关闭的警告提示</h2>
		<u-alert-tips :show="show" type="error" @close="show = false" :title="title" :description="description" :close-able="true"></u-alert-tips>
		<u-alert-tips :show="show" type="primary" @close="show = false" :title="title" close-text="close" :description="description" :close-able="true"></u-alert-tips>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: '登高望远',
			description: '欲穷千里目，更上一层楼',
			show: true
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
.alerttips {
	width: 100%;
	height: 100%;
}
</style>
