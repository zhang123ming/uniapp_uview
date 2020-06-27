<template>
	<view class="tag">
		<h2>基本使用</h2>
		<u-tag text="雪月夜" type="success" />
		<h2>设置标签基本类型</h2>
		<block v-for="(item, index) in list" :key="index"><u-tag class="item" :text="item.name" :mode="item.mode" :type="item.name"></u-tag></block>
		<h2>设置标签形状 circleRight circleLeft</h2>
		<u-tag text="主谓宾" shape="circle"></u-tag>
		<u-tag text="定状补" shape="circleRight"></u-tag>
		<h2>标签是否关闭</h2>
		<u-tag text="可以关闭" closeable :show="show" @click="close"></u-tag>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{ name: 'primary', mode: 'dark' },
				{ name: 'info', mode: 'light' },
				{ name: 'success', mode: 'plain' },
				{ name: 'warning', mode: 'dark' },
				{ name: 'error', mode: 'dark' }
			],
			show: true
		};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	},
	methods: {
		close(e) {
	console.log(e)
			this.show = false;
		}
	}
};
</script>

<style lang="scss">
.tag {
	width: 100%;
	height: 100%;
	padding-top: 20px;
	box-sizing: border-box;
	.item {
		padding: 5px 20px;
		margin: 5px 20px;
		margin-left: 5px;
	}
	h2 {
		margin: 10px 10px;
	}
}
</style>
