<template>
	<view class="input">
		<h2>基本使用</h2>
		<u-input v-model="value" :type="type" :border="border" placeholder="有边框 type值为text"></u-input>
		<u-input v-model="value" type="textarea" :border="border" placeholder="文本输入框"></u-input>
		<u-input v-model="value" type="textarea" :border="border" height="100" :autoHeight="autoHeight" placeholder="文本输入框,随着内容的高度增加而增加"></u-input>
		<h2>password模式</h2>
		<u-input type="password" :border="border" placeholder="password" :passwordIcon="isIcon"></u-input>
		<u-input type="number" :border="border" placeholder="number" :passwordIcon="isIcon"></u-input>
		<u-input type="idcard" :border="border" placeholder="idcard" :passwordIcon="isIcon"></u-input>
		<u-input type="digit" :border="border" placeholder="digit" :passwordIcon="isIcon"></u-input>
		<u-input type="text" v-model="sex" disabled :border="border" @click="isShow" />
		<u-action-sheet :list="actionSheetList" v-model="show" @click="actionSheetCallback"></u-action-sheet>
	</view>
</template>

<script>
export default {
	data() {
		return {
			value: '',
			type: 'text',
			border: true,
			isIcon: true,
			sex: '',
			autoHeight: true,
			actionSheetList: [
				{
					text: '男'
				},
				{
					text: '女'
				},
				{
					text: '保密'
				}
			],
			show: false
		};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	},
	methods: {
		isShow() {
			this.show = !this.show;
		},
		actionSheetCallback(index) {
			this.sex = this.actionSheetList[index].text;
		}
	}
};
</script>

<style lang="scss">
.input {
	width: 100%;
	height: 100%;
	padding: 0 20px;
	box-sizing: border-box;
	h2 {
		margin: 15px;
	}
}
</style>
