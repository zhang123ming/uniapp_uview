<template>
	<view class="picker">
		<h2>时间模式</h2>
		<u-button @click="show = true">查看日期</u-button>
		<u-picker v-model="show" mode="time" @confirm="confirm" default-time="2019-12-23 12:12:12"></u-picker>
		<h2>地区模式</h2>
		<u-button @click="showAddress = true">查看地址</u-button>
		<u-picker mode="region" @confirm="confirm" v-model="showAddress" :area-code="['13', '1303', '130304']"></u-picker>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			showAddress: false
		};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	},
	methods:{
		confirm(e){
			console.log(e)
		}
	}
};
</script>

<style lang="scss">
.picker {
	width: 100%;
	height: 100%;
	padding: 20px;
	box-sizing: border-box;
	button {
		margin-top: 15px;
	}
}
</style>
