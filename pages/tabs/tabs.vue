<template>
	<view class="box">
		<u-tabs :list="list" :is-scroll="true" :current="current" @change="change"></u-tabs>
		<view v-if="current==0" class="content">
			全部
		</view>
		<view v-if="current==1" class="content">
			待收货
		</view>
		<view v-if="current==2" class="content">
			待付款
		</view>
		<view v-if="current==3" class="content">
			待评价
		</view>
		<view v-if="current==4" class="content">
			已评价
		</view>
		<view v-if="current==5" class="content">
			回收站
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [{name:"全部"},{
								name: '待收货'
							}, {
								name: '待付款'
							}, {
								name: '待评价'
							},{name:"已评价"},{name:"回收站"}],
							current: 0
		};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	},
	methods:{
		change(e){
			this.current=e;
		}
	}
};
</script>

<style lang="scss">
	.content{
		width: 100%;
		height: 300px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 30px;
	font-weight: 700;
	}
</style>
