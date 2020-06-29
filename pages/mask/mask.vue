<template>
	<view class="box">
		<h2>基本使用</h2>
		<u-button type="success" @click="showMask">显示遮罩罩</u-button>
		<u-mask :show="show" @click="show = false"></u-mask>
		<h2>嵌入内容</h2>
		<u-button @click="showContent">嵌入内容</u-button>
		<u-mask :show="show2" @click="show2 = false">
			<view class="warp">
				<view class="rect" @tap.stop>这是嵌入的内容这是嵌入的内容这是嵌入的内容这是嵌入的内容这是嵌入的内容这是嵌入的内容这是嵌入的内容这是嵌入的内容这是嵌入的内容</view>
			</view>
		</u-mask>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			show2: false
		};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	},
	methods: {
		showMask() {
			this.show = true;
		},
		showContent() {
			this.show2 = true;
		}
	}
};
</script>

<style lang="scss">
.warp {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
}

.rect {
	width: 120px;
	height: 120px;
	background-color: #fff;
}
</style>
