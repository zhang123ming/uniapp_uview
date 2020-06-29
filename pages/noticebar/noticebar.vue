<template>
	<view class="noticbar">
		<h2>基本使用</h2>
		<u-notice-bar mode="horizontal" :list="list"></u-notice-bar>
		<u-notice-bar mode="horizontal" :is-circular="false" :list="list"></u-notice-bar>
		<u-notice-bar mode="vertical" :list="list"></u-notice-bar>
		<h2>配置主题</h2>
		<u-notice-bar type="error" @close="close"  :list="list" :closeIcon="true"></u-notice-bar>
		<h2>配置图标</h2>
		<u-notice-bar :volume-icon="false" :list="list" :closeIcon="true"></u-notice-bar>
		<u-notice-bar :more-icon="true" :list="list" @getMore="getMore"></u-notice-bar>
		<u-notice-bar :close-iocn="true" :list="list"></u-notice-bar>
		<h2>配置滚动速度</h2>
	<u-notice-bar :volume-icon="false"  :duration="1500" :list="list" :closeIcon="true"></u-notice-bar>
		<u-notice-bar :more-icon="true" :duration="1500" :list="list"></u-notice-bar>
		<u-notice-bar :close-iocn="true" :duration="1500" :list="list"></u-notice-bar>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: ['寒雨连江夜入吴', '平明送客楚山孤', '洛阳亲友如相问', '一片冰心在玉壶']
		};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	},
	methods:{
		getMore(){
			uni.showToast({
				title:"点击了向右侧图标"
			})
		},
		close(){
			uni.showToast({
				title:"点击了关闭右侧图标"
			})
		}
	}
};
</script>

<style lang="scss">
.noticbar {
	width: 100%;
	height: 100%;
}
</style>
