<template>
	<view class="layout">
		<view class="wrap">
			<u-row gutter="16">
				<u-col span="3"><view class="demo-layout bg-purple"></view></u-col>
				<u-col span="4"><view class="demo-layout bg-purple-light"></view></u-col>
				<u-col span="5"><view class="demo-layout bg-purple-dark"></view></u-col>
			</u-row>
			<u-row gutter="16" justify="space-between">
				<u-col span="3"><view class="demo-layout bg-purple"></view></u-col>
				<u-col span="9"><view class="demo-layout bg-purple-light"></view></u-col>
			</u-row>
			<h2>分栏使用</h2>
			<u-row gutter="16">
				<u-col span="3"><view class="demo-layout bg-purple"></view></u-col>
				<u-col span="9"><view class="demo-layout bg-purple-light"></view></u-col>
			</u-row>
			<h2>分栏偏移</h2>
			<u-row gutter="16">
				<u-col span="3"><view class="demo-layout bg-purple"></view></u-col>
				<u-col span="3" offset="6"><view class="demo-layout bg-purple-light"></view></u-col>
			</u-row>
			<h2>对齐方式</h2>
			<u-row gutter="16" justify="center">
				<u-col span="3">
					<view class="demo-layout bg-purple"></view>
				</u-col>
				<u-col span="3">
					<view class="demo-layout bg-purple-light"></view>
				</u-col>
			</u-row>
		</view>
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
.layout {
	width: 100%;
	height: 100%;
	.wrap {
		padding: 24rpx;
	}

	.u-row {
		margin: 40rpx 0;
	}

	.demo-layout {
		height: 80rpx;
		border-radius: 8rpx;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}
}
</style>
