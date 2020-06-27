<template>
	<view class="search">
		<h2>基本使用</h2>
		<u-search v-model="keyword"></u-search>
		<h2>设置输入框形状</h2>
		<u-search shape="round" placeholder="未开启清除控件" :clearabled="false"></u-search>
		<h2>是否开启右边控件</h2>
		<u-search :show-action="true" v-model="keyword" action-text="扫描" :animation="true"></u-search>
		<h2>自定义样式</h2>
		<u-search input-align="center" v-model="keyword" placeholder="请输入内容" ></u-search>
	</view>
</template>

<script>
export default {
	data() {
		return {
			keyword: '遥看瀑布挂前川'
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
.search {
	width: 100%;
	height: 100%;
	padding: 15px;
	box-sizing: border-box;
	.u-search {
		margin-top: 10px !important;
		margin-bottom: 20px !important;
	}
}
</style>
