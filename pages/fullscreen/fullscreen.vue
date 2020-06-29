<template>
	<view class="box">
		<u-button type="success" shape="circle" @click="open">打开压窗屏</u-button>
		<u-modal v-model="show" :show-cancel-button="true" confirm-text="升级" :title="`发现新的版本`" @cancel="cancel" @confirm="confirm">
			<view class="u-update-content"><rich-text :nodes="content"></rich-text></view>
		</u-modal>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			content: `
					1. 修复badge组件的size参数无效问题<br>
					2. 新增Modal模态框组件<br>
					3. 新增压窗屏组件，可以在APP上以弹窗的形式遮盖导航栏和底部tabbar<br>
					4. 修复键盘组件在微信小程序上遮罩无效的问题
				`
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
		confirm() {
			uni.showToast({
				title:"点击了confirm按钮"
			})
			this.closeModal();
		},
		cancel() {
			uni.showToast({
				title:"点击了cancel按钮"
			})
			this.closeModal();
		},
		closeModal() {
						uni.navigateBack();
					}
	}
};
</script>

<style lang="scss">
		.u-full-content {
			background-color: #00C777;
		}
		
		.u-update-content {
			font-size: 26rpx;
			color: $u-content-color;
			line-height: 1.7;
			padding: 30rpx;
		}
</style>
