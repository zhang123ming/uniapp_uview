<template>
	<view class="cell">
		<h2>基本使用</h2>
		<u-cell-group>
			<u-cell-item icon="setting" title="个人设置"></u-cell-item>
			<u-cell-item icon="integral" title="会员等级" value="新版本"></u-cell-item>
		</u-cell-group>
		<h2>自定义内容</h2>
		<u-cell-group>
			<!-- arrow-direction="left" down  up left right -->
			<u-cell-item arrow-direction="down" title="搜索"><u-icon slot="icon" size="32" name="search"></u-icon></u-cell-item>
			<u-cell-item  title="badge">
				<u-badge count="99" :absolute="true" slot="right-icon"></u-badge>
			</u-cell-item>
		</u-cell-group>
	
	</view>
</template>

<script>
export default {
	data() {
		return {
			checked: true
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
.cell {
	width: 100%;
	height: 100%;
	h2 {
		margin: 20px 10px;
	}
}
</style>
