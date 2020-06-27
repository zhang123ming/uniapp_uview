<template>
	<view class="box">
		<u-cell-group>
			<u-field required :error-message="errorMessage" maxlength="11" v-model="phone" type="number" label="手机号" placeholder="请填写手机号"></u-field>
			<u-field v-model="code" label="验证码" placeholder="请填写验证码"></u-field>
		</u-cell-group>
		<h2>在尾部插入按钮</h2>
		<u-cell-group>
			<u-field v-model="code" :maxlength="6" label="验证码" placeholder="请填写验证码">
				<u-button v-if="isShow" size="mini" slot="right" type="success" @tap="getCode">{{ codeText }}</u-button>
			</u-field>
			<u-verification-code ref="uCode" @change="codeChange"></u-verification-code>
		</u-cell-group>
	</view>
</template>

<script>
export default {
	data() {
		return {
			phone: '',
			code: '',
			errorMessage: '格式错误，请重新输入。。。',
			mobile: '',
			codeText: '',
			isShow:false
		};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	},
	watch:{
		phone(e){
			if(e.length==11){
				this.isShow=true;
			}else{
				this.isShow=false;
			}
		}
	},
	methods: {
		codeChange(text) {
			this.codeText = text;
		},
		getCode() {
			if (this.$refs.uCode.canGetCode) {
				// 模拟向后端请求验证码
				uni.showLoading({
					title: '正在获取验证码'
				});
				setTimeout(() => {
					uni.hideLoading();
					// 通知验证码组件内部开始倒计时
					this.$refs.uCode.start();
				}, 1000);
			} else {
				this.$u.toast('倒计时结束后再发送');
			}
		}
	}
};
</script>

<style lang="scss">
.box {
	width: 100%;
	height: 100%;
}
</style>
