<template>
	<view class="box">
		<h2>基本使用</h2>
		<view class="wrap">
				<u-swiper :list="list" :title="true"  mode="number" indicator-pos="bottomRight"></u-swiper>
		</view>
		<h2>指示器的方向</h2>
		<view class="wrap">
				<u-swiper :list="list" :title="true"   mode="rect"  indicator-pos="bottomCenter"></u-swiper>
		</view>
		<h2>开启3D效果</h2>
		<view class="wrap">
				<u-swiper :list="list" :title="true" mode="rect" interval="4000"   :effect3d="true" indicator-pos="bottomCenter"></u-swiper>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
				list: [{
									image: 'http://img95.699pic.com/photo/50044/6551.jpg_wh300.jpg',
									title: '蒹葭苍苍，白露为霜。所谓伊人，在水一方'
								},
								{
									image: 'http://img95.699pic.com/photo/50046/7342.jpg_wh300.jpg',
									title: '溯洄从之，道阻且长。溯游从之，宛在水中央'
								},
								{
									image: 'http://img95.699pic.com/photo/50066/1677.jpg_wh300.jpg',
									title: '蒹葭萋萋，白露未晞。所谓伊人，在水之湄'
								}
							]
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
		.wrap {
			padding: 40rpx;
			.u-swiper-image{
				width: 100%;
				height: 100%;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
</style>
