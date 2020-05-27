<template>
	<view class="content">
		<view class="forms">
			<QSInput :name="formName" variableName="inputType" title="用户名" v-model="value.username"></QSInput>
			<QSInput :name="formName" inputType="int" variableName="inputType" title="身高" v-model="value.height"></QSInput>
			<QSInput :name="formName" inputType="int" variableName="inputType" title="体重" v-model="value.weight"></QSInput>
			<QSInput :name="formName" inputType="int" variableName="inputType" title="舒张压" v-model="value.blood_high"></QSInput>
			<QSInput :name="formName" inputType="int" variableName="inputType" title="收缩压" v-model="value.blood_low"></QSInput>
			<QSInput :name="formName" inputType="int" variableName="inputType" title="血糖" v-model="value.sugar"></QSInput>
			<QSInput :name="formName" inputType="int" variableName="inputType" title="肺活量" v-model="value.vital"></QSInput>
			<QSInput :name="formName" inputType="string" variableName="inputType" title="地址" v-model="value.area"></QSInput>
			<button class="primary" type="primary" hover-class="click"  @tap="changeData">提交数据</button>
		</view>
	</view>
</template>

<script>
	import QSApp from '@/components/QS-inputs-split/js/app.js';
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				formName:'input',
				value:{
					username:'',
					height:'',
					weight:'',
					blood_high:'',
					blood_low:'',
					sugar:'',
					vital:'',
					area:''
				}
			};
		},
		computed:{
			...mapState(['token'])
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title:'用户信息收集'
			})
		},
		methods:{
			changeData:function(){
				var _self = this;
				if (_self.value.username == ''){
					uni.showToast({
						title:'请输入用户名',
						icon:'none'
					})
					return ;
				}else if (_self.value.height == ''){
					uni.showToast({
						title:'请输入身高',
						icon:'none'
					})
					return ;
				}else if (_self.value.weight == ''){
					uni.showToast({
						title:'请输入体重',
						icon:'none'
					})
					return ;
				}
				uni.request({
					url:'http://kdjk.c5ppc.cn/user_info',
					method:'GET',
					data:{
						token:_self.token,
						name:_self.value.username,
						height:_self.value.height,
						weight:_self.value.weight,
						blood_high:_self.value.blood_high,
						blood_low:_self.value.blood_low,
						sugar:_self.value.sugar,
						vital:_self.value.vital,
						area:_self.value.area
					},
					success:function(res){
						let data = typeof res.data == "string" ? JSON.parse(res.data) : res.data;
						console.log(data)
						if (data.code == 10010){
							uni.showToast({
								title:'后台已收到数据，后将进行数据分析',
								icon:'none',
								success:function(){
									setTimeout(function(){
										uni.navigateBack({
											delta:1
										})
									},1000)
								}
							});

						}else if (data.code == 10000){
							console.log(res)
							uni.showToast({
								title:'数据有误！请重新输入',
								icon:'none'
							})
						}
					},
					fail:function(res){
						uni.showToast({
							title:'网络异常！请稍后再试',
							icon:'none'
						})
					}
				})
				this.reSet();
			},
			reSet:function(){
				this.value={
					username:'',
					height:'',
					weight:''
				}
			}
		}
	}
</script>

<style lang="scss">
	.tip{
		font-size: 18px;
		text-align: center;
		margin-bottom: 10px;
	}
	.forms{
		width: 280px;
		margin: 10px auto;
		button{
			margin-top: 10px;
		}
	}
	.click {
		background: #007AFF;
	}
</style>
