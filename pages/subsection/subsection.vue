<template>
	<view>
		<u-subsection :list="list" :current="current" :animation="true" @change="change"></u-subsection>
	</view>
</template>

<script>
export default {
	data() {
		return {
		list: [
							{
								name: '待发货'
							}, 
							{
								name: '待付款'
							}, 
							{
								name: '待评价'
							},{
								name:"已完成"
							}
						],
						current: 1
		};
	},
	onLoad(e) {
	
		uni.setNavigationBarTitle({
			title: e.option
		});
	},
	methods:{
		change(e){
			uni.showToast({
				title:e.toString(),
				icon:"none"
			})
		}
	}
};
</script>

<style lang="scss"></style>
