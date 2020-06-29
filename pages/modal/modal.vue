<template>
	<view class="modal">
		<h2>基本使用</h2>
		<u-button plain shape="circle" type="warning" @click="open">打开</u-button>
		<u-modal v-model="show" :content="content"></u-modal>
		<h2>传入富文本内容</h2>
		<u-button type="success" @click="open2">打开模态框</u-button>
		<u-modal v-model="show2" :title-style="{ color: 'red' }"><rich-text :nodes="content"></rich-text></u-modal>
		<h2>异步关闭</h2>
		<u-button type="info" v-model="show3" @click="openmodal3">打开</u-button>
		<u-modal v-model="show3" :content="content" @confirm="confirm" ref="uModal" :async-close="true"></u-modal>
		<h2>点击遮罩关闭</h2>
		<u-button type="error" @click="close">点击遮罩关闭</u-button>
		<u-modal v-model="show4" :mask-close-able="true" :content="content"></u-modal>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			content: '东临碣石，以观沧海',
			show2: false,
			show3: false,
			show4:false,
		};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	},
	methods: {
		open() {
			this.show = true;
		},
		open2() {
			this.show2 = true;
		},
		openmodal3() {
			this.show3 = true;
		},
		confirm() {
			setTimeout(() => {
				this.show3 = false;
			}, 1000);
		},
		close(){
			this.show4=true;
		}
	}
};
</script>

<style lang="scss">
.slot-content {
	font-size: 28rpx;
	color: $u-content-color;
	padding-left: 30rpx;
}
</style>
