<template>
	<view class="body">
		<view class="image">
			<image :src="img" mode="scaleToFill"></image>
		</view>
		<view class="result">
			<text>AI诊断：</text>
			<view>{{judge}}</view>
			<br/>
			<text>AI建议：</text>
			<view>{{advice}}</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img:'http://kdjk.c5ppc.cn/uploads/tongue/20191005/b585c03d305562e19b6bbf5401ccca7d.png',
				judge:'',
				advice:''
			}
		},
		onLoad(props) {
			const _this=this;//this指向又出问题了呀~
			uni.setNavigationBarTitle({
				title:'问诊报告'
			})
			uni.request({
				url:'http://kdjk.c5ppc.cn/tongue_index',
				method:'GET',
				data:{
					url:props.url
				},
				success:function(res){
					let data= typeof res.data == 'string'? JSON.parse(res.data):res.data;
					_this.judge=data.data[0].judge;
					_this.advice=data.data[0].advice;
					_this.img=data.data[0].url;
					if (data.data[0].judge == undefined) //不存在的属性是undefined 不是字符串！
						uni.showToast({
							title:'服务器可能开小差了，没能识别您的病情哦!',
							icon:'none'
						})
				}
			})
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.body{
		width: 100%;
		padding: 20px;
	}
	.image{
		margin: 5vh auto;
		justify-content: center;
		width: 225px;
		height: 150px;
		image{
			width: 225px;
			height: 150px;
		}
	}
	.result{
		
		text{
			font-weight: bold;
			
		}
	}
</style>
