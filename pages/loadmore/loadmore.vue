<template>
	<view class="box">
		<view class="wrap">
			<block v-for="(item, index) in list" :key="index">
				<view class="item">{{ '第' + item + '条数据' }}</view>
			</block>
			<!-- 基本使用方式 -->
			<!-- <u-loadmore :status="status"></u-loadmore> -->
			<u-loadmore :status="status" icon-type="iconType" :load-text="loadText" />
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			status: 'loadmore',
			list: 15,
			page: 0,
			iconType: 'flower',
			loadText: {
				loadmore: '轻轻上拉',
				loading: '努力加载中',
				nomore: '实在没有了'
			}
		};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	},
	onReachBottom() {
		const self = this;
		console.log(self.page);
		if (self.page == 5) {
			console.log('结束');
			return false;
		}
		self.page++;
		setTimeout(() => {
			self.list += 15;
			if (self.page >= 5) {
				self.status = 'nomore';
			} else {
				self.status = 'loading';
			}
		}, 1000);
	}
};
</script>

<style lang="scss">
.box {
	width: 100%;
	height: 100%;
	.wrap {
		width: 100%;
		height: 100%;
		.item {
			width: 100%;
			height: 50px;
			border-bottom: 1px solid #ddd;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
}
.u-load-more-wrap {
	width: 100% !important;
	height: 50px !important;
}
</style>
