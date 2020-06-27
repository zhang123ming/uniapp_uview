<template>
	<view class="badge">
		<h2>基本用法</h2>
		<u-badge size="60" type="success"  overflow-count="99" count="100" ></u-badge>

	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	}
};
</script>

<style lang="scss">
.badge {
	width: 100%;
	height: 100%;
}

h2 {
	margin: 20px 10px;
}
</style>
