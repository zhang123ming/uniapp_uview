<template>
	<view class="table">
		<u-table>
			<u-tr>
				<u-td width="33.333%">浙江大学</u-td>
				<u-td>
					<u-tr>
						<u-td>二年级</u-td>
						<u-td>22</u-td>
					</u-tr>
					<u-tr>
						<u-td>三年级</u-td>
						<u-td>23</u-td>
					</u-tr>
					<u-tr>
						<u-td>四年级</u-td>
						<u-td>24</u-td>
					</u-tr>
				</u-td>
			</u-tr>
			<u-tr>
				<u-td>清华大学</u-td>
				<u-td>05班</u-td>
				<u-td>23</u-td>
			</u-tr>
		</u-table>
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
.table {
	width: 100%;
	height: 100%;
}
</style>
