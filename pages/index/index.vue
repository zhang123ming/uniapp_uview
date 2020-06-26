<template>
	<view class="content">
		<block v-for="(item, index) in list" :key="index">
			<view class="list" @click="routerLink(item)">
				<view class="left">
					<text class="number">{{ index + 1 }} 、</text>
					<text class="text">{{ item.name }}</text>
				</view>
				<view class="right"><image src="../../static/right.png"></image></view>
			</view>
		</block>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{ name: 'color', url: '../color/color' },
				{ name: 'icon', url: '../icon/icon' },
				{ name: 'button', url: '../button/button' },
				{ name: 'layout', url: '../layout/layout' },
				{ name: 'cell', url: '../cell/cell' },
				{ name: 'badge', url: '../badge/badge' },
				{ name: 'tag', url: '../tag/tag' },
				{ name: 'input', url: '../input/input' },
				{ name: 'form', url: '../form/form' },
				{ name: 'calendar', url: '../calendar/calendar' },
				{ name: 'select', url: '../select/select' },
				{ name: 'keyboard', url: '../keyboard/keyboard' },
				{ name: 'picker', url: '../picker/picker' },
				{ name: 'rate', url: '../rate/rate' },
				{ name: 'search', url: '../search/search' },
				{ name: 'numberbox', url: '../numberbox/numberbox' },
				{ name: 'upload', url: '../upload/upload' },
				{ name: 'verificationcode', url: '../verificationcode/verificationcode' },
				{ name: 'field', url: '../field/field' },
				{ name: 'checkbox', url: '../checkbox/checkbox' },
				{ name: 'radio', url: '../radio/radio' },
				{ name: 'switch', url: '../switch/switch' },
				{ name: 'slider', url: '../slider/slider' },
				{ name: 'circleprogress', url: '../circleprogress/circleprogress' },
				{ name: 'lineprogress', url: '../lineprogress/lineprogress' },
				{ name: 'table', url: '../table/table' },
				{ name: 'countdown', url: '../countdown/countdown' },
				{ name: 'countto', url: '../countto/countto' },
				{ name: 'actionsheet', url: '../actionsheet/actionsheet' },
				{ name: 'alerttips', url: '../alerttips/alerttips' },
				{ name: 'toast', url: '../toast/toast' },
				{ name: 'noticebar', url: '../noticebar/noticebar' },
				{ name: 'toptips', url: '../toptips/toptips' },
				{ name: 'collapse', url: '../collapse/collapse' },
				{ name: 'popup', url: '../popup/popup' },
				{ name: 'swipeaction', url: '../swipeaction/swipeaction' },
				{ name: 'modal', url: '../modal/modal' },
				{ name: 'fullscreen', url: '../fullscreen/fullscreen' },
				{ name: 'line', url: '../line/line' },
				{ name: 'card', url: '../card/card' },
				{ name: 'mask', url: '../mask/mask' },
				{ name: 'nonetwork', url: '../nonetwork/nonetwork' },
				{ name: 'grid', url: '../grid/grid' },
				{ name: 'swiper', url: '../swiper/swiper' },
				{ name: 'timeline', url: '../timeline/timeline' },
				{ name: 'skeleton', url: '../skeleton/skeleton' },
				{ name: 'sticky', url: '../sticky/sticky' },
				{ name: 'waterfall', url: '../waterfall/waterfall' },
				{ name: 'divider', url: '../divider/divider' },
				{ name: 'backtop', url: '../backtop/backtop' },
				{ name: 'navbar', url: '../navbar/navbar' },
				{ name: 'tabs', url: '../tabs/tabs' },
				{ name: 'tabsswiper', url: '../tabsswiper/tabsswiper' },
				{ name: 'subsection', url: '../subsection/subsection' },
				{ name: 'indexlist', url: '../indexlist/indexlist' },
				{ name: 'steps', url: '../steps/steps' },
				{ name: 'empty', url: '../empty/empty' },
				{ name: 'link', url: '../link/link' },
				{ name: 'section', url: '../section/section' },
				{ name: 'messageinput', url: '../messageinput/messageinput' },
				{ name: 'avatarcropper', url: '../avatarcropper/avatarcropper' },
				{ name: 'loadmore', url: '../loadmore/loadmore' },
				{ name: 'readmore', url: '../readmore/readmore' },
				{ name: 'gap', url: '../gap/gap' },
				{ name: 'avatar', url: '../avatar/avatar' },
				{ name: 'loading', url: '../loading/loading' }
			]
		};
	},
	onLoad() {},
	methods: {
		routerLink(item) {
			uni.navigateTo({
				url: item.url + '?option=' + item.name,
				animationType: 'pop-in',
				animationDuration: 200
			});
		}
	}
};
</script>

<style lang="scss">
.content {
	width: 100%;
	height: 100%;
}

.list {
	width: 100%;
	padding: 10px 15px;
	box-sizing: border-box;
	border-bottom: 1px solid #f5f5f5;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.left {
		.number {
			font-size: 16px;
			font-weight: 700;
			color: #333;
		}
		.text {
			font-size: 14px;
		}
	}
	.right {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		image {
			width: 25px;
			height: 20px;
		}
	}
}
</style>
