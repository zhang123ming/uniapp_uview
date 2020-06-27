<template>
	<view class="select">
		<u-button type="warn" plain @click="isShow">打开 {{ result }}</u-button>
		<!-- 单列模式 -->
		<!-- <u-select v-model="show" @confirm="change"   :list="list"></u-select> -->
		<!-- 多列模式 -->
		<!-- <u-select v-model="show" mode="mutil-column" :list="lists" @confirm="change"></u-select> -->
		<!-- 多列联动模式 -->
		<u-select v-model="show" mode="mutil-column-auto" :list="listss" @confirm="change"></u-select>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			list: [{ value: '1', label: 'one' }, { value: '2', label: 'two' }, { value: '3', label: 'three' }],
			lists: [
				[
					{
						value: '1',
						label: '江'
					},
					{
						value: '2',
						label: '湖'
					}
				],
				[
					{
						value: '3',
						label: '夜'
					},
					{
						value: '4',
						label: '雨'
					}
				]
			],
			listss: [
				{
					value: 1,
					label: '中国',
					children: [
						{
							value: 2,
							label: '广东',
							children: [
								{
									value: 3,
									label: '深圳'
								},
								{
									value: 4,
									label: '广州'
								}
							]
						},
						{
							value: 5,
							label: '广西',
							children: [
								{
									value: 6,
									label: '南宁'
								},
								{
									value: 7,
									label: '桂林'
								}
							]
						}
					]
				},
				{
					value: 8,
					label: '美国',
					children: [
						{
							value: 9,
							label: '纽约',
							children: [
								{
									value: 10,
									label: '皇后街区'
								}
							]
						}
					]
				}
			],
			result: {}
		};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	},
	methods: {
		isShow() {
			this.show = true;
		},
		change(e) {
			console.log(e);
			this.result = e[0];
		}
	}
};
</script>

<style lang="scss">
.select {
	width: 100%;
	height: 100%;
}
</style>
