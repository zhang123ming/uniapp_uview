<template>
	<view class="keyboard">
		<view>{{ value }}</view>
		<!-- 
		:cancelBtn="false" :取消按钮是否显示
		 :dot-enabled="false"  ：mode="number" 时  是否显示 “.”
		 :random="true"  :mode="number" 键盘数字打乱
		 :mask="false" 是否显示遮罩
		 -->
		<!-- <u-button @click="showKeyBoard">显示</u-button>
	<u-car-keyboard ref="uKeyboard" mode="number" v-model="show"></u-car-keyboard>
	<u-car-keyboard ref="uKeyboard" mode="car" v-model="show"></u-car-keyboard>
	<u-car-keyboard ref="uKeyboard" mode="card" v-model="show"></u-car-keyboard> -->
		<u-keyboard ref="uKeyboard" mode="card" :mask="false" @change="valChange" @backspace="backspace" :tooltip="isFalse" v-model="showCard"></u-keyboard>
		<u-keyboard ref="uKeyboard" mode="car" @change="valChange" @backspace="backspace" v-model="showCar"></u-keyboard>
		<u-keyboard ref="uKeyboard" mode="number" @change="valChange" @backspace="backspace" :dot-enabled="false" :random="true" v-model="showNumber"></u-keyboard>
		<u-button @click="showNumber = true">打开Number</u-button>
		<u-button @click="showCar = true">打开car</u-button>
		<u-button @click="showCard = true">打开card</u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			showCar: false,
			showCard: false,
			showNumber: false,
			isFalse: true,
			value: ''
		};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	},
	methods: {
		showKeyBoard() {
			this.show = true;
		},
		// 按键被点击
		valChange(e) {
			this.value += e;
		},
		// 退格键
		backspace(e) {
			if (this.value.length) {
				this.value = this.value.substr(0, this.value.length - 1);
			}
		}
	}
};
</script>

<style lang="scss">
.keyboard {
	width: 100%;
	height: 100%;
	padding: 20px;
	box-sizing: border-box;
	button {
		margin: 20px;
	}
}
</style>
