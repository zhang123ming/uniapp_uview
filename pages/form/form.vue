<template>
	<view class="form">
		<u-form :model="form" ref="uform">
			<u-form-item label="姓名"><u-input v-model="form.name"></u-input></u-form-item>
			<u-form-item label="简介"><u-input v-model="form.intro"></u-input></u-form-item>
			<u-form-item label="性别"><u-input v-model="form.sex"></u-input></u-form-item>
			<u-form-item label="水果">
				<u-checkbox-group width="40%">
					<u-checkbox>苹果</u-checkbox>
					<u-checkbox>雪梨</u-checkbox>
					<u-checkbox>草莓</u-checkbox>
				</u-checkbox-group>
			</u-form-item>
			<u-form-item label="开关"><u-switch slot="right"></u-switch></u-form-item>
		</u-form>
		<h2>表单验证</h2>
		<u-form :model="form" ref="uForm">
			<u-form-item label="姓名" prop="name"><u-input v-model="form.name" /></u-form-item>
			<u-form-item label="简介" prop="intro"><u-input v-model="form.intro" /></u-form-item>
		</u-form>
		<u-button @click="submit">提交</u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			form: {
				name: '',
				intro: '',
				sex: ''
			},
			rules: {
				name: [
					{
						required: true,
						message: '请输入姓名',
						// 可以单个或者同时写两个触发验证方式
						trigger: ['change', 'blur']
					}
				],
				intro: [
					{
						min: 5,
						message: '简介不能少于5个字',
						trigger: 'change'
					}
				]
			}
		};
	},
	onReady() {
		this.$refs.uForm.setRules(this.rules);
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	},
	methods: {
		submit() {
			this.$refs.uForm.validate(valid => {
				if (valid) {
					console.log('验证通过');
				} else {
					console.log('验证失败');
				}
			});
		}
	}
};
</script>

<style lang="scss">
.form {
	width: 100%;
	height: 100%;
	padding: 20px 15px;
	box-sizing: border-box;
}
</style>
