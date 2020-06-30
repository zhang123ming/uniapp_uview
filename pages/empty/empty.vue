<template>
	<view class="box">
		<h2>请点击tag改变下方图标</h2>
		
		<u-empty text="所谓伊人,在水一方" :mode="mode"  ></u-empty>
		<view class="content">
			<block v-for="(item, index) in list" :key="index">
				<u-tag class="item" type="success" :text="item.name" @click="setIcon(item.name)"></u-tag></block>
		</view>
	

	</view>
</template>

<script>
export default {
	data() {
		return {
			mode: 'message',
			list: [
				{ name: 'car' },
				{ name: 'page' },
				{ name: 'search' },
				{ name: 'address' },
				{ name: 'wifi' },
				{ name: 'order' },
				{ name: 'coupon' },
				{ name: 'favor' },
				{ name: 'permission' },
				{ name: 'history' },
				{ name: 'news' },
				{ name: 'message' },
				{ name: 'list' },
				{ name: 'data' }
			]
		};
	},
	methods: {
		setIcon(name) {
			this.mode = name;
		}
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	}
};
</script>

<style lang="scss">
.box {
	width: 100%;
	height: 100%;
	overflow: hidden;
	h2 {
		text-align: center;
	}
	.content {
		position: fixed;
		top: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		.item {
			flex: 25%;
			margin: 5px;
			padding: 10px 0;
			box-sizing: border-box;
			text-align: center;
		}
	}
}
</style>
