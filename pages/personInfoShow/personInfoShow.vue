<template>
	<view class="content">
		<view class="table">
	    <view class="table-item">
				<view class="itemName">体重</view>
				<view class="itemData">{{tableData.weight}}</view>
				<view class="itemUnit">kg</view>
			</view>
			<view class="table-item">
				<view class="itemName">身高</view>
				<view class="itemData">{{tableData.height}}</view>
				<view class="itemUnit">cm</view>
			</view>
			<view class="table-item">
				<view class="itemName">舒张压</view>
				<view class="itemData">{{tableData.blood_high}}</view>
				<view class="itemUnit">mmHg</view>
			</view>
			<view class="table-item">
				<view class="itemName">收缩压</view>
				<view class="itemData">{{tableData.blood_low}}</view>
				<view class="itemUnit">mmHg</view>
			</view>
			<view class="table-item">
				<view class="itemName">血糖</view>
				<view class="itemData">{{tableData.sugar}}</view>
				<view class="itemUnit">mmol/L</view>
			</view>
			<view class="table-item">
				<view class="itemName">肺活量</view>
				<view class="itemData">{{tableData.vital}}</view>
				<view class="itemUnit">ml</view>
			</view>
			<view class="table-item">
				<view class="itemName">地区</view>
				<view class="itemData">{{tableData.area}}</view>
				<view class="itemUnit">/</view>
			</view>
		</view>
		<button class="primary" type="primary" hover-class="click" @tap="navigateTo('personInfo')">修改信息</button>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				tableData:'111',
			};
		},
		computed:{
			...mapState(['token'])
		},
		methods:{
			getTableData(){
				var _this =this;
			  this.tableData=[
					uni.request({
						url:'http://kdjk.c5ppc.cn/user',
						data:{
							token:_this.token
						},
						success(res) {
							let data = typeof res.data == "string" ? JSON.parse(res.data) : res.data;
							_this.tableData = data.data[0];
							console.log(data.data[0])
						}
					})
			    ] 			
			},
			navigateTo(pages){
				let url='../'+pages+'/'+pages;
				uni.navigateTo({
				    url: url
				});
			}
		},
		onShow(){
		  this.getTableData();
			uni.setNavigationBarTitle({
				title:'用户信息'
			})
		},
	}
</script>

<style lang="scss">
	.table{
		width:300px;
		margin: 30px auto;
		border-top: #000000 1px solid;
		.table-item{
			height: 40px;
			width:100%;
			display: flex;
			flex-direction: row;
			box-sizing:border-box;
			text-align: center;
			line-height: 40px;
			font-size: 18px;
			border-bottom: #000000 1px solid;
			.itemName{
				flex: 1;
				border-left: #000000 1px solid;
				border-right: #000000 1px solid;
			},
			.itemData{
				flex: 1;
				border-right: #000000 1px solid;
			},
			.itemUnit{
				flex: 1;
			}
		}
	}
	.click {
		background: #007AFF;
	}
</style>
