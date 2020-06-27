<template>
	<view class="radio">
		<!-- 	<u-radio-group v-model="value" @change="radioGroupChange">
					<u-radio 
						@change="radioChange" 
						v-for="(item, index) in list" :key="index" 
						:name="item.name"
						:disabled="item.disabled"
					>
						{{item.name}}
					</u-radio>
				</u-radio-group> -->
		<u-radio-group v-model="value" @change="radioGroupChange">
			<u-radio @change="radioChange" shape="circle" v-for="(item, index) in list" :key="index" :name="item.name" :disabled="item.disabled">{{ item.name }}</u-radio>
		</u-radio-group>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					name: 'apple',
					disabled: false
				},
				{
					name: 'banner',
					disabled: false
				},
				{
					name: 'orange',
					disabled: false
				}
			],
			// u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
			value: 'orange'
		};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	},
	methods: {
		radioChange(e) {
			console.log(e);
		},
		// 选中任一radio时，由radio-group触发
		radioGroupChange(e) {
			console.log(e);
		}
	}
};
</script>

<style lang="scss">
.radio {
	width: 100%;
	height: 100%;
	padding: 20px;
	box-sizing: border-box;
}
</style>
