<template>
	<view class="content">
		<view class="camera">
			<view class="s-camera" @tap="tap()">
			</view>
			<view class="tip">
				<text>
					点击拍摄你的舌头开始诊断
				</text>
			</view>
		</view>
		<view class="tips">
			<text>注意:请在光线充足的环境下拍摄，拍摄范围为人中到下吧，请尽量保持舌头位于屏幕中央，拍摄前避免食用给舌头染色的食物，避免喝水后、洗澡后、运动后马上给舌头拍照，避免过度用力和紧绷，图片越清晰，问诊结果越精确。</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title:'舌诊'
			})
		},
		methods: {
			tap(){
				// uni.navigateTo({
				// 	url:'../tongueResult/tongueResult'
				// })
				uni.chooseImage({
					success:function(res){
						uni.uploadFile({
							url:'http://kdjk.c5ppc.cn/tongue_upload',
							filePath:res.tempFilePaths[0],
							name:'tongue',
							success:function(res){
								console.log(res);
								console.log(JSON.parse(res.data).code);
								if(JSON.parse(res.data).code==10010){
									console.log(JSON.parse(res.data).data);
									let url='../tongueResult/tongueResult?url='+JSON.parse(res.data).data;
									uni.showLoading({
										title:'AI诊断大约需要30s，请稍等'
									})
									setTimeout(function() {
										uni.hideLoading();
										uni.navigateTo({
											url:url,
										})
									}, 30000);
								}else{
									console.log(res)
									uni.showToast({
										title:'估计本地出了什么问题',
										icon:'none'
									})
								}
							},
							fail:function(res){
								console.log(res);
								uni.showToast({
									title:'口袋健康可能出了点问题...',
									icon:'none'
								})
							}
						})
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	view.content{
		box-sizing: border-box;
		width: 100%;
		padding: 10px;
		background: #FFFFFF;
	}
	.camera{
		width: 30vh;
		height: calc(30vh + 30px);
		margin: calc(10vh) auto;
		.s-camera{
			width: calc(30vh - 4px);
			height: calc(30vh - 4px);
			border-radius: 15vh;
			border: #40A9FF 2px solid;
			background: url(../../static/icons/camera.png) no-repeat center center;
		}
		.tip{
			line-height: 30px;
			font-size: 16px;
			color: #888;
			text-align: center;
			white-space: nowrap;
		}
	}
	.tips{
		width: calc(100vw - 20px);
		position: absolute;
		bottom: 15vh;
		text{
			font-size: 14px;
			color:#B8BDBF;
		}
	}
</style>
