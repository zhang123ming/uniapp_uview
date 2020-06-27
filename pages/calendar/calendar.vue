<template>
	<view class="calendar">
		<u-calendar toolTip="请选择具体日期时间" v-model="show" :mode="mode" @change="change" :safe-area-inset-bottom="isFalse" :change-year="isFalse"></u-calendar>
		<u-button @click="selectDate">选择单个日期</u-button>
		<u-button type="success" plain @click="selectRang">日期区间值：</u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			mode: 'date',
			isFalse: false
		};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.option
		});
	},
	methods: {
		/**
		{
			day: 4, // 选择了哪一天
			days: 30, // 这个月份有多少天
			isToday: true, // 选择的日期是否今天
			month: 6, // 选择的月份
			result: "2020-06-04", // 选择的日期整体值
			week: "星期四", // 选择日期所属的星期数
			year: 2020 , // 选择的年份
		}
		 * */
		selectDate() {
			this.mode = 'date';
			this.show = true;
		},
		/**
		 * {
	endDate: "2020-06-04", // 选择的结束日期
	endDay: 4, // 结束日期是哪一天
	endMonth: 6, // 结束日期的月份
	endWeek: "星期四", // 结束日期的星期数
	endYear: 2020, // 结束日期的年份
	startDate: "2020-06-01", // 选择的起始日期
	startDay: 1, // 起始日期是哪一天
	startMonth: 6, // 起始日期的月份
	startWeek: "星期一", // 起始日期的星期数
	startYear: 2020 // 起始日期的年份
}
		 * */
		selectRang() {
			this.mode = 'rang';
			this.show = true;
		},
		change(e) {
			console.log(e);
		}
	}
};
</script>

<style lang="scss">
.calendar {
	width: 100%;
	height: 100%;
}
</style>
