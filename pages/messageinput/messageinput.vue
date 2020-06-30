<template>
	<view class="box">
		<h2>基本使用</h2>
		<view class="content">
			<block v-for="(item, index) in list" :key="index"><u-tag class="item" :text="item.name" type="error" @click="setMode(item.name)"></u-tag></block>
		</view>
		<u-message-input :mode="mode"></u-message-input>
		<h2>设置最大长度和初始值</h2>
		<u-message-input :maxlength="5" mode="bottomLine" value="46871"></u-message-input>
		<h2>是否自动获取焦点</h2>
		<u-message-input :focus="false"></u-message-input>
		<h2>配置呼吸灯效果</h2>
		<u-message-input :breathe="true"></u-message-input>
		<h2>使用.代替输入内容</h2>
		<u-message-input :dot-fill="true" inactive-color="#23c156"  @change="change" @finish="finish"></u-message-input>
		<h2>禁用系统自带键盘</h2>
		<u-message-input :dot-fill="true"  :disabled-keyboard="true" @change="change" @finish="finish"></u-message-input>
	</view>
</template>

<script>
export default {
	data() {
		return {
			mode: 'box',
			list: [{ name: 'box' }, { name: 'middleLine' }, { name: 'bottomLine' }],
			show: true
		};
	},
	methods: {
		setMode(name) {
			this.mode = name;
		}
	},
	methods: {
		clickInput(){
			uni.showToast({
				title:"点击了输入框"
			})
		},
		change(e) {
			uni.showToast({
				title: '当前的值是' + e,
				icon: 'none'
			});
		},
		finish(e) {
			uni.showToast({
				title: '输入结束后' + e,
				icon: 'none'
			});
		}
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	}
};
</script>

<style lang="scss">
.box {
	width: 100%;
	height: 100%;
	.content {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 20px;
		.item {
			flex: 1;
			margin: 0 10px;
			text-align: center;
		}
	}
}
</style>
