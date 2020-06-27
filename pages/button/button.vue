<template>
	<view class="button">
		<h2>设置按钮主题</h2>
		<u-button type="primary">主要按钮</u-button>
		<u-button type="success">成功按钮</u-button>
		<u-button type="info">信息按钮</u-button>
		<u-button type="warning">警告按钮</u-button>
		<u-button type="error">危险按钮</u-button>
		<h2>设置按钮为半圆</h2>
		<u-button type="primary" shape="circle">主要按钮</u-button>
		<u-button type="success" shape="shape">成功按钮</u-button>
		<h2>设置按钮为镂空</h2>
		<u-button type="primary" shape="circle" plain>主要按钮</u-button>
		<u-button type="success" shape="shape" plain>成功按钮</u-button>
		<h2>按钮API</h2>
		<u-button type="primary" loading>loading</u-button>
		<u-button type="success" ripple>水波纹效果 ripple</u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	}
};
</script>

<style lang="scss">
.button {
	width: 100%;
	height: 100%;
	padding: 10px;
	box-sizing: border-box;
	button {
		margin: 10px 0;
	}
	h2 {
		margin-bottom: 20px;
	}
}
</style>
