<template>
	<view class="actionsheet">
		<h2>基本使用</h2>
		<u-button @click="show = true">打开ActionSheet</u-button>
		<u-action-sheet :list="list" v-model="show"></u-action-sheet>
		<h2>配置顶部信息and 取消按钮</h2>
		<u-button @click="shows = true">配置顶部信息</u-button>
		<u-action-sheet :list="list" v-model="shows" :tips="tips" @close="close" @click="actionsheet" :cancel-btn="true"></u-action-sheet>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			shows: false,
			tips: {
				text: '顶部提示信息',
				color: '#909399',
				fontSize: 24
			},
			list: [{ text: '点赞', color: 'blue', fontsSize: 28 }, { text: '分享', color: 'blue', fontsSize: 28 }, { text: '评论', color: 'blue', fontsSize: 28 }]
		};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	},
	methods: {
		actionsheet(e) {
			uni.showToast({
				title: '点击了第' + e + '个',
				icon: 'none'
			});
		},
		close() {
			uni.showToast({
				title: '点击了取消按钮',
				icon: 'none'
			});
		}
	}
};
</script>

<style lang="scss">
.actionsheet {
	width: 100%;
	height: 100%;
}
</style>
