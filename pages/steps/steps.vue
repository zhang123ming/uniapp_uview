<template>
	<view>
		<h2>基本使用</h2>
		<u-steps :list="numList" :current="1"></u-steps>
		<h2>设置步骤条的主题</h2>
		<u-steps :list="numList" :current="2" active-color="#fa3534"></u-steps>
		<h2>设置步骤条的模式</h2>
		<u-steps :list="numList" :current="2" mode="number"></u-steps>
		<h2>自定义图标</h2>
		<u-steps type="success" mode="number" :list="numList" icon="chat" :current="3"></u-steps>
	</view>
</template>

<script>
export default {
	data() {
		return {
			numList: [
				{
					name: '下单',
					icon: 'info'
				},
				{
					name: '出库',
					icon: 'info'
				},
				{
					name: '运输',
					icon: 'info'
				},
				{
					name: '签收',
					icon: 'info'
				},
				{ name: '已完成', icon: 'info' }
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

<style lang="scss"></style>
