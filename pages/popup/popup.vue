<template>
	<view class="box">
		<h2>基本使用</h2>
		<u-button @click="show = true">打开</u-button>
		<u-popup v-model="show"><view>出淤泥而不染，濯清莲而不妖</view></u-popup>
		<h2>设置弹出层方向</h2>
	<view class="btn">
		<u-button @click="changedir('top')" type="success" plain shape="circle">top</u-button>
		<u-button @click="changedir('left')" type="success" plain shape="circle">left</u-button>
		<u-button @click="changedir('right')" type="success" plain shape="circle">right</u-button>
		<u-button @click="changedir('bottom')" type="success" plain shape="circle">bottom</u-button>
			<u-button @click="changedir('center')" type="success" plain shape="circle">center</u-button>
		<u-popup v-model="shows" :closeable="true" :mode="dir" length="50%"><view>人生若只如初见，何事秋风悲画扇</view></u-popup>
	</view>
	<h2>设置弹出层圆角</h2>
	<u-button @click="setBorder" type="error" plain>设置圆角</u-button>
	<u-popup v-model="show3" mode="top" border-radius="14" length="70%">
		<view  style="display: flex;justify-content: center;align-items: center;">
			人生若只如初见，何事秋风北风扇
		</view>
	</u-popup>
	
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			dir: 'tip',
			shows: false,
			show3:false
		};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	},
	methods: {
		changedir(item) {
			this.dir = item;
			this.shows = true;
		},
		setBorder(){
			this.show3=true
			
		}
	}
};
</script>

<style lang="scss">
	.btn{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		button{
			flex:1;
		}
	}
</style>
