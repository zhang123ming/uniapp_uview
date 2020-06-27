<template>
	<view class="checkbox">
		<block v-for="(li,index) in arr">
		<u-tag  type="success" :text="li" :closeable="true"> </u-tag>
		</block>
		<u-checkbox-group @change="checkBoxGroupChange">
			<u-checkbox @change="checkboxChange" v-model="item.checked"  shape="circle" v-for="(item, index) in list" :key="index" :name="item.name">
				{{item.name}}
			</u-checkbox>
		</u-checkbox-group>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					name: 'apple',
					checked: false,
					disabled: false
				},
				{
					name: 'banner',
					checked: false,
					disabled: false
				},
				{
					name: 'orange',
					checked: false,
					disabled: false
				}
			],
			arr:[]
		};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	},
	methods: {
		checkBoxGroupChange(e) {
			console.log("group=="+e)
			this.arr=e;
		},
		checkboxChange(e) {
			console.log("list==="+e.name)
		}
	}
};
</script>

<style lang="scss">
.checkbox {
	width: 100%;
	height: 100%;
	
}
</style>
