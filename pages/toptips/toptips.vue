<template>
	<view class="toptips">
		<h2>基本使用</h2>
		<u-button type="success" @click="getShow">显示toptips</u-button>
		<u-top-tips v-show="isShow" ref="uTips" ></u-top-tips>
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			isShow:false
		};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	},
	onReady() {
	
	},
	methods:{
		getShow(){
			
			this.isShow=true;
			this.$refs.uTips.show({
				title:"铁马冰河入梦来",
				type:"error",
				duration:"2000"
			})
		}
	}
};
</script>

<style lang="scss">
.toptips {
	width: 100%;
	height: 100%;
}
</style>
