<template>
	<view class="box">
		<h2>基本使用</h2>
		<u-grid :col="5">
			<u-grid-item>
				<u-icon name="photo" :size="46"></u-icon>
				<view class="grid-text">图片</view>
			</u-grid-item>
			<u-grid-item>
				<u-icon name="lock" :size="46"></u-icon>
				<view class="grid-text">锁头</view>
			</u-grid-item>
			<u-grid-item>
				<u-icon name="hourglass" :size="46"></u-icon>
				<view class="grid-text">沙漏</view>
			</u-grid-item>
			<u-grid-item>
				<u-icon name="hourglass" :size="46"></u-icon>
				<view class="grid-text">沙漏</view>
			</u-grid-item>	<u-grid-item>
				<u-icon name="hourglass" :size="46"></u-icon>
				<view class="grid-text">沙漏</view>
			</u-grid-item>
		</u-grid>
		<h2>给宫格设置右上角的角标和图标</h2>
		<u-grid :col="3">
			<u-grid-item>
				<u-badge count="9" :offset="[20, 20]"></u-badge>
				<u-icon name="photo" :size="46"></u-icon>
				<view class="grid-text">图片</view>
			</u-grid-item>
			<u-grid-item>
				<image src="/static/image/icon/hot5.png" class="badge-icon"></image>
				<u-icon name="lock" :size="46"></u-icon>
				<view class="grid-text">锁头</view>
			</u-grid-item>
			<u-grid-item>
				<u-icon name="hourglass" :size="46"></u-icon>
				<view class="grid-text">沙漏</view>
			</u-grid-item>
		</u-grid>
		<h2>实现宫格的左右滚动</h2>
		<swiper class="swiper" @change="change">
			<swiper-item>
				<u-grid :col="3" @click="click" hover-class="hover-class">
					<u-grid-item v-for="(item, index) in list" :index="index" :key="index">
						<u-icon :name="item" :size="46"></u-icon>
						<text class="grid-text">{{ '宫格' + (index + 1) }}</text>
					</u-grid-item>
				</u-grid>
			</swiper-item>
			<swiper-item>
				<u-grid :col="3" @click="click">
					<u-grid-item v-for="(item, index) in list" :index="index + 9" :key="index">
						<u-icon :name="item" :size="46"></u-icon>
						<text class="grid-text">{{ '宫格' + (index + 1) }}</text>
					</u-grid-item>
				</u-grid>
			</swiper-item>
			<swiper-item>
				<u-grid :col="3" @click="click">
					<u-grid-item v-for="(item, index) in list" :index="index + 18" :key="index">
						<u-icon :name="item" :size="46"></u-icon>
						<text class="grid-text">{{ '宫格' + (index + 1) }}</text>
					</u-grid-item>
				</u-grid>
			</swiper-item>
		</swiper>
		<view class="indicator-dots" v-if="isSwiper">
			<view class="indicator-dots-item" :class="[current == 0 ? 'indicator-dots-active' : '']"></view>
			<view class="indicator-dots-item" :class="[current == 1 ? 'indicator-dots-active' : '']"></view>
			<view class="indicator-dots-item" :class="[current == 2 ? 'indicator-dots-active' : '']"></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			current: 0,
			list: ['integral', 'kefu-ermai', 'coupon', 'gift', 'scan', 'pause-circle', 'wifi', 'email', 'list']
		};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	},
	methods: {
		change(e) {
			this.current = e.detail.current;
		}
	}
};
</script>

<style lang="scss">
.grid-text {
	font-size: 28rpx;
	margin-top: 4rpx;
	color: $u-type-info;
}
.badge-icon {
	position: absolute;
	top: 14rpx;
	right: 40rpx;
	width: 30rpx;
	height: 30rpx;
}
.swiper {
	height: 480rpx;
}

.indicator-dots {
	margin-top: 40rpx;
	display: flex;
	justify-content: center;
	align-items: center;
}

.indicator-dots-item {
	background-color: $u-tips-color;
	height: 6px;
	width: 6px;
	border-radius: 10px;
	margin: 0 3px;
}

.indicator-dots-active {
	background-color: $u-type-primary;
}
</style>
