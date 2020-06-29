<template>
	<view class="box">
		<u-index-list :scrollTop="scrollTop">
			<view v-for="(item,index) in indexList" :key="index">
				<u-index-anchor :index="item"></u-index-anchor>
<view class="list-cell" v-for="(item,j) in 5" :key="j">列表{{j}}</view>
			</view>
		</u-index-list>
	</view>
</template>

<script>
export default {
	data() {
		return {
			scrollTop: 0,
			indexList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
		};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	},
	methods:{
		
	},
	onPageScroll(e) {
		this.scrollTop=e.scrollTop;
	}
};
</script>

<style lang="scss"></style>
