<template>
	<view class="box">
		<h2>基本使用</h2>
	<view class="wrap">
			<view class="u-avatar-wrap">
				<image class="u-avatar-demo" :src="avatar" mode="aspectFill"></image>
			</view>
			<u-button @tap="chooseAvatar">进入裁剪页</u-button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			avatar: 'https://cdn.uviewui.com/uview/common/logo.png'
		};
	},
	created() {
		// 监听从裁剪页发布的事件，获得裁剪结果
		uni.$on('uAvatarCropper', path => {
			this.avatar = path;
			// 可以在此上传到服务端
			uni.uploadFile({
				url: 'http://www.example.com/upload',
				filePath: path,
				name: 'file',
				complete: res => {
					console.log(res);
				}
			});
		});
	},
	methods: {
		// page.json中配置一下参数
		// {
		// 	"path": "uview-ui/components/u-avatar-cropper/u-avatar-cropper",
		// 	"style": {
		// 		"navigationBarTitleText": "头像裁剪",
		// 		"navigationBarBackgroundColor": "#000000"
		// 	}
		// }
		
		chooseAvatar() {
			// 此为uView的跳转方法，详见"文档-JS"部分，也可以用uni的uni.navigateTo
			this.$u.route({
				// 关于此路径，请见下方"注意事项"
				url: '/uview-ui/components/u-avatar-cropper/u-avatar-cropper',
				// 内部已设置以下默认参数值，可不传这些参数
				params: {
					// 输出图片宽度，高等于宽，单位px
					destWidth: 300,
					// 裁剪框宽度，高等于宽，单位px
					rectWidth: 200,
					// 输出的图片类型，如果'png'类型发现裁剪的图片太大，改成"jpg"即可
					fileType: 'jpg'
				}
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
	.u-avatar-demo {
		width: 150rpx;
		height: 150rpx;
		border-radius: 100rpx;
	}
}
</style>
