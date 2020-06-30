<template>
	<view class="box">
		<h2>基本用法</h2>
		<u-read-more :toggle="true" show-height="110"><rich-text :nodes="content"></rich-text></u-read-more>
		<h2>异步初始化</h2>
		<u-read-more ref="uReadMore" show-height="50" :shadow-style="shadowStyle"><rich-text :nodes="contents"></rich-text></u-read-more>
	</view>
</template>

<script>
export default {
	data() {
		return {
			content: `山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
							苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
							无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？`,
			contents: '',
			shadowStyle: {
				backgroundImage: 'none',
				paddingTop: '0',
				marginTop: '20rpx'
			}
		};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});

		setTimeout(() => {
			(this.contents = `山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
							苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
							无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？`),
				this.$nextTick(() => {
					this.$refs.uReadMore.init();
				});
		}, 2000);
	}
};
</script>

<style lang="scss">
.box {
	width: 100%;
	height: 100%;
}
</style>
