<template>
	<view class="content" style="height:100%;">
		<view class="inputcomponent">
			<form @submit="formSubmit">
				<view class="uni-form-item uni-column forIconInput">
				    <view class="forIcon" >
						<image src="/static/imgs/user.png" mode="aspectFill" ></image>
					</view>
					<view class='forinput'>
						<input class="uni-input" type="text" name="account" placeholder="请输入账号"/>
					</view>
				</view>
				<view class="uni-form-item uni-column forIconInput">
				    <view class="forIcon" >
						<image src="/static/imgs/key.png" mode="aspectFill" ></image>
					</view>
					<view class='forinput'>
						<input class="uni-input" type="password" name="password" placeholder="请输入密码"/>
					</view>
				</view>
				<view>
					<button type="primary" class="primary" hover-class="click" form-type="submit">登录</button>
				</view>
			</form>	
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'	
	export default {
		components: {
			
		},
		data() {
			return {
				
			};
		},
		methods:{
			...mapMutations(['login','saveToken']),
			formSubmit: function(e) { //登录验证+发送请求
			  // console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
			  const formdata = e.detail.value;
				const result = this.formsValidate(formdata);
				// console.log("result为"+result)
				if (result != null){
					uni.showToast({
						title:result,
						icon:'none'
					})
					return;
				}
				//发送请求
				uni.showLoading({
					title:'正在登陆...'
				})
				uni.request({
					url:'http://kdjk.c5ppc.cn/login',
					data:formdata,
					method:'GET',
					dataType:'JSON',
					success:(res)=>{
						let data = typeof res.data == "string" ? JSON.parse(res.data) : res.data;
						this.saveToken({token:data.data});
						// let data = res.data;
						this.login();
						if(data.code==10010){
							
							uni.showToast({
								title:'登陆成功',
								icon:'none',
								success: function(){
									setTimeout(() => {
										uni.navigateBack({
											delta:1
										})
									}, 1000);
								}
							})
						}else if(data.code==10000){
							uni.showToast({
								title:'账号或密码不正确,请重试',
								icon:'none'
							})
						}
					},
					fail:(res)=>{
						uni.showToast({
							title:'网络可能出了点问题,请稍后再试',
							icon:'none'
						})
						console.log("服务器异常，请稍后再试!");
						console.log(res);
					},
					complete:()=>{
						uni.hideLoading();
						setTimeout(()=>{
							uni.hideToast()
						},1000)
					}
				})
				
			},
			formsValidate:function(formdata){
				const username = formdata.account;
				const password = formdata.password;
				if (username == '') return '用户名不可为空';
				if (password == '') return '密码不可为空'; 
				return null;
			}
		}
	}
</script>

<style lang="scss">
	.inputcomponent{
		display: flex;
		flex:1;
		flex-direction: column;

	}
	.moreway{
		display: flex;
		flex: 4;
		background: #4CD964;
	}
	.forIconInput{
		display: flex;
		flex-direction: row;
		width: 60%;
		height: 70upx;
		
		border-radius: 10px;
		margin: 50upx auto 0;
	}
	.forIcon{
		display:flex;
		flex: 1;
		justify-content: center;
		align-items: center;
	}
	.forbutton{
		width: 60%;
		height: default;
		background: #007AFF;
	}
	input{
		height: 100%;
		width: 90%;
		font-size: 30upx;
	}
	image{
		width: 50upx;
		height: 50upx;
	}
	button{
		background-color:#40A9FF ;
		width:60%;
		margin-top: 50upx;
	}
	.forinput{
		flex: 5;
		justify-content: center;
		align-items: center;
		display:flex;
	}
	.click {
		background: #007AFF;
	}
</style>
