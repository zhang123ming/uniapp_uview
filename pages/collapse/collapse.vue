<template>
	<view class="collapse">
		<h2>基本设置</h2>
		<u-collapse>
			<u-collapse-item v-for="(item, index) in itemList" :key="index" :title="item.head">{{ item.body }}</u-collapse-item>
		</u-collapse>
		<h2>控制面板的初始状态，是否可以操作</h2>
		<u-collapse>
			<u-collapse-item v-for="(item, index) in itemList" :key="index" :disabled="item.disabled" :title="item.head" :open="item.open">{{ item.body }}</u-collapse-item>
		</u-collapse>
		<h2>自定义样式</h2>
		<u-collapse :item-style="itemStyle" event-type="close" :arrow="arrow" :accordion="accordion" @change="change">
			<u-collapse-item :index="index" @change="itemChange" :title="item.head" v-for="(item, index) in itemList" :key="index">
				<view class="collapse-item">{{ item.body }}</view>
			</u-collapse-item>
		</u-collapse>
	</view>
</template>

<script>
export default {
	data() {
		return {
			itemList: [
				{
					head: '赏识在于角度的转换',
					body: '只要我们正确择取一个合适的参照物乃至稍降一格去看待他人，值得赏识的东西便会扑面而来',
					open: true,
					disabled: true,
					disabled: true
				},
				{
					head: '生活中不是缺少美，而是缺少发现美的眼睛',
					body: '学会欣赏，实际是一种积极生活的态度，是生活的调味品，会在欣赏中发现生活的美',
					open: false,
					disabled: false
				},
				{
					head: '周围一些不起眼的人、事、物，或许都隐藏着不同凡响的智慧',
					body: '但是据说雕刻大卫像所用的这块大理石，曾被多位雕刻家批评得一无是处，有些人认为这块大理石采凿得不好，有些人嫌它的纹路不够美',
					open: false,
					disabled: false
				}
			],
			itemStyle: {
				marginTop: '10px'
			},
			arrow: true,
			accordion:true
		};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	},
	methods: {
		change(e) {
			uni.showToast({
				title: e.toString()
			});
		},
		itemChange(e) {
			uni.showToast({
				title: e.toString()
			});
		}
	}
};
</script>

<style lang="scss">
.collapse {
	width: 100%;
	height: 100%;
	.collapse-item {
		color: red;
		padding-bottom: 10px;
	}
}
</style>
