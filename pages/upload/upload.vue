<template>
	<view class="upload">
		<h2>自动上传</h2>
		<u-upload :action="action" :file-list="fileList"></u-upload>
		<h2>手动上传</h2>
		<u-upload ref="uUpload" :action="action" :auto-upload="false"></u-upload>
		<u-button type="success" @click="submit">提交</u-button>
		<h2>获取上传图片的列表</h2>
		<u-upload ref="piclist" max-count="6" :max-size="5 * 1024 * 1024" :before-upload="beforeUpload" @on-remove="onRemove" @on-uploaded="onUploaded" :action="action" :auto-upload="false"></u-upload>
		<u-button @click="submits">提交</u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			action: 'http://www.example.com/upload',
			fileList: [
				{
					url: 'http://pics.sc.chinaz.com/files/pic/pic9/201912/hpic1886.jpg'
				}
			],
			filesArr: []
		};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	},
	methods: {
		beforeUpload(index, list) {
			// 只上传偶数索引的文件
			// console.log('beforeUpload====>>>',index+"====="+JSON.stringify(list));
		},
		submit(e) {
			this.$refs.uUpload.upload();
		},
		submits() {
			this.$refs.piclist.upload();
		},
		onUploaded(lists) {
			this.filesArr = lists;
			for (var i = 0; i < this.filesArr.length; i++) {
				console.log(i + '=========' + JSON.stringify(this.filesArr[i]));
			}
		},
		onRemove(index, lists) {
			console.log('图片已被移除');
		}
	}
};
</script>

<style lang="scss">
.upload {
	width: 100%;
	height: 100%;
}
</style>
