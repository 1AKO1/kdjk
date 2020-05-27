<template>
	<view class="content">
		<view class="fortitle">今日报告</view>
		<view class="body" style="z-index: 99;">
			<view style="width: 48%;">
				<view class="dataItem" @tap="show({itemName:'步行',itemNumber:stepnumber,itemImg:'../../static/icons/stepnumber.png',itemUnit:'步',index:0})">
					<view class="fortext">步行</view>
					<view class="forImg">
						<image src="../../static/icons/stepnumber.png" style="width: 100px;height: 100px"></image>
					</view>
					<view class="fortext" style="font-size: 18px;">{{steps}}</view>
					<view class="fortext">步</view>
				</view>
				
				<view class="dataItem" @tap="show({itemName:'心率',itemNumber:heartbeats,itemImg:'../../static/icons/heartbeats.png',itemUnit:'bpm',index:1})">
					<view class="fortext">心率</view>
					<view class="forImg">
						<image src="../../static/icons/heartbeats.png" style="width: 100px;height: 100px"></image>
					</view>
					<view class="fortext" style="font-size: 18px;">{{heartbeats}}</view>
					<view class="fortext">bpm</view>
				</view>
				
		
			</view>
			<view style="width: 48%;">
				<view class="dataItem" @tap="show({itemName:'睡眠',itemNumber:sleephour,itemImg:'../../static/icons/moon.png',itemUnit:'小时',index:2})">
					<view class="fortext">睡眠</view>
					<view class="forImg">
						<image src="../../static/icons/moon.png" style="width: 100px;height: 100px;margin: 20upx 0;"></image>
					</view>
					<view class="fortext" style="font-size: 18px;">{{sleephour}}</view>
					<view class="fortext">小时</view>
				</view>
				
				<view class="dataItem" @tap="show({itemName:'血糖',itemNumber:bloodsuger,itemImg:'../../static/icons/bloodsuger.png',itemUnit:'mmol/L',index:3})">
					<view class="fortext">血糖</view>
					<view class="forImg">
						<image src="../../static/icons/bloodsuger.png" style="width: 100px;height: 100px"></image>
					</view>
					<view class="fortext" style="font-size: 18px;">{{bloodsuger}}</view>
					<view class="fortext">mmol/L</view>
				</view>
			</view>
		</view>
		
		<popup-layer ref="popupRef" :direction="'top'" style="width: 100%;height: 600upx;position: relative;margin-top: -600upx;">
			<view style="display: flex;height: 600rpx;flex-direction: column;">
				
				<view class="poptitle">
					<view class="datapicker forpoptext" :style="{color:daycolor}" @tap="click(1)">● 今日</view>
					<view class="datapicker forpoptext" :style="{color:weekcolor}" @tap="click(2)">● 本周</view>
					<view class="datapicker forpoptext" :style="{color:mouthcolor}" @tap="click(3)">● 本月</view>
					<view style="flex: 1;"></view>
					<image class="close forpoptext" src="../../static/icons/close.png" @tap="close()"></image>
				</view>
				
				<view class="qiun-charts" style="flex: 3; padding-top: 20upx; box-sizing: border-box;">
					<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" @touchstart="touchLineA"></canvas>
				</view>
				
				<view style="flex: 1;display:flex;">
					<view style="flex: 1;flex-direction: row; display: flex;">
						<view style="flex: 1;display: flex; justify-content: center; align-content: center;">
							<image :src="itemImg" style="width: 40px;height: 40px;margin: 20upx 0;"></image>
						</view>
						<view style="flex: 1;">
							<view class="forpoptext"><text>{{itemName}}</text></view>
						</view>
					</view>
					<view style="flex: 1"></view>
					<view style="flex: 1;" class="forpoptext">{{itemNumber}}<text style="font-size:14px;">{{itemUnit}}</text></view>
				</view>
			</view>
		</popup-layer>
	</view>
</template>

<script>
	import popupLayer from '../../components/popup-layer/popup-layer.vue'
	import uCharts from '../../js_sdk/u-charts/u-charts/u-charts.min.js'
	import {mapState} from 'vuex'
	var _self;
	var canvaLineA=null;
	export default {
		components:{
				popupLayer
		},
		data() {
			return {
				src:'../../static/icons/moon.png',
				daycolor:'#40A9FF',
				weekcolor:'',
				mouthcolor:'',
				boolShow:false,
				stepnumber:3453,
				heartbeats:71,
				bloodsuger:5.1,
				sleephour:6.76,
				ride:3.22,
				//charts
				chartsseries:[{
						name: '步数',
						data: [0, 0, 0, 0, 0, 0, 200, 3000,54,34,53,112]
					},
					{
						name: '心率',
						data: [70, 75, 72, 70, 65, 68, 80,90,70,68,79,70]

					},
					{
						name: '时常',
						data: [40, 60, 60, 57, 60, 60, 10, 0, 0, 0, 0, 0]
					},
					{
						name: '血糖',
						data: [5.4, 5.2, 4.8, 4.6, 4.5, 4.2, 4.3,6.8, 6.1, 5.3, 5.2, 4.9]
					
					},
				],
				chartsranges:[
					{
						max:100,
						min:0
					},
					{						
						max:160,
						min:40
					},{
						max:60,
						min:0
					},{
						max:10,
						min:0
					}
				],
				index:0,
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				chartData: {
					categories: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00'],
					series: [{
						name: '步数',
						data: [5.4, 5.2, 4.8, 4.6, 4.5, 4.2, 4.3,6.8, 6.1, 5.3, 5.2, 4.9]
					}]
				},
			}
		},
		computed:{
			...mapState(['itemName','itemNumber','itemImg','itemUnit','hasLogin','steps'])
		},
		onLoad() {
			_self = this;
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(400);
			// this.getServerData();
			/*
				 页面初始化时获取数据 然后直接渲染。不会更改
				 修改为每次点击后触发show函数获取一次数据 渲染一次
			*/
		},
		methods: {
			click(num){ //现在是单纯改一个颜色。。。
				if(num==1){
					_self.daycolor='#40A9FF';
					_self.weekcolor='';
					_self.mouthcolor=''
				}else if(num==2){
					_self.daycolor='';
					_self.weekcolor='#40A9FF';
					_self.mouthcolor=''
				}else if(num==3){
					_self.daycolor='';
					_self.weekcolor='';
					_self.mouthcolor='#40A9FF'
				}
			},
			show(props){ //然后强制页面刷新页面 ch
				this.index = props.index;
				this.$forceUpdate();
				this.getServerData();
					//--end
			   this.$refs.popupRef.show(props); // 或者 boolShow = rue
			},
			close(){
			    this.$refs.popupRef.close();// 或者 boolShow = false
			},
			getServerData(){ //处理获 应用数据的索引值
			// 	uni.request({
			// 		url: 'https://www.ucharts.cn/data.json',
			// 		data:{
			// 		},
			// 		success: function(res) {
			// 			console.log(res.data.data)
			// 			let LineA={categories:[],series:[]};
			// 			//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
			// 			LineA.categories=res.data.data.LineA.categories;
			// 			LineA.series=res.data.data.LineA.series;
				_self.chartData.series[0] = _self.chartsseries[this.index];
				_self.showLineA("canvasLineA",_self.chartData);
			// 		},
			// 		fail: () => {
			// 			_self.tips="网络错误，小程序端请检查合法域名";
			// 		},
			// 	});
			},
			showLineA(canvasId,chartData){
				let max = _self.chartsranges[this.index].max;
				let min = _self.chartsranges[this.index].min;
				canvaLineA=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'line',
					fontSize:11,
					legend:{show:true},
					dataLabel:false,
					dataPointShape:true,
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					xAxis: {
						type:'grid',
						gridColor:'#CCCCCC',
						gridType:'dash',
						dashLength:8
					},
					yAxis: {
						gridType:'dash',
						gridColor:'#CCCCCC',
						dashLength:8,
						splitNumber:10,
						min:min,
						max:max,
						format:(val)=>{return val.toFixed(0)}
					},
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						line:{
							type: 'straight'
						}
					}
				});
			},
			touchLineA(e) {
				canvaLineA.showToolTip(e, {
					format: function (item, category) {
						return category + ' ' + item.name + ':' + item.data 
					}
				});
			}			
		}
	}
</script>

<style lang="scss">
	.qiun-charts {
		width: 750upx;
		height: 400upx;
		background-color: #FFFFFF;
	}
	
	.charts {
		width: 750upx;
		height: 400upx;
		background-color: #FFFFFF;
		}
	.fortitle{
		color: #40A9FF;
		margin: 30upx;
	}
	.body{
		margin: 0 30upx;
		display: flex;
		justify-content: space-between;
	}
	.dataItem{
		width: 100%; 
		background-color:#fff;
		margin: 20upx  0;
		border-radius: 10upx;
		padding:0 15upx 10upx;
		box-sizing: border-box; 
		border-top:#fff solid 1rpx;
	}
	.forImg{
		width: 100%; 
		display: flex; 
		justify-content: center;
	}
	.fortext{
		font-size: 14px;
		color: #aaa;
		margin: 15upx 0;
	}
	.forpoptext{
		text-align: center;
		padding: 25upx 20upx;
		color: #aaa;
		font-size: 18px;
	}
	.poptitle{
		flex: 1;
		flex-direction: row; 
		display: flex;
		.datapicker{
			width: 120upx;
			height: 100%;
		}
		.close{
			width: 48upx;
			height: 48upx;
			justify-content: flex-end;
		}
	}
</style>
