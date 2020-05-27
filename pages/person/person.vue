<template>
	<view class="content" >
		<view v-if="hasLogin">
			<view style="height: 400upx;width: 100%;margin-bottom: 20upx; display: flex;flex-direction: column; background: #FFFFFF;">
				<view style="flex: 3; display: flex; justify-content: center;">
					<image :src="img" style="width: 80px; height: 80px;margin-top: 40upx;" @tap="tap()"></image>
				</view>
				<view style="flex: 1;text-align: center;">{{username}}</view>
				<view style="flex: 1;text-align: center; font-size: 14px;">{{area}}</view>
			</view>
			<view>
				<uni-list>
					<uni-list-item title="用户信息" @tap="navigateTo('personInfoShow')"></uni-list-item>
					<uni-list-item title="消息列表" @tap="navigateTo('messagelist')"></uni-list-item>
					<uni-list-item title="舌诊" @tap="navigateTo('tongueDiagnosis')"></uni-list-item>
				</uni-list>
			</view>
			<view class="btn-row">
				<button type="default" @tap="bindLogout">退出登录</button>
			</view>
		</view>
		<view class="btn-row" v-if="!hasLogin" >
			<button type="primary" class="primary" @tap="bindLogin">登录</button>
		</view>	
	</view>
</template>

<script>
	import uniListItem from "../../components/uni-list-item/uni-list-item.vue"
	import uniList from "../../components/uni-list/uni-list.vue"
	import {
	    mapState,
	    mapMutations
	} from 'vuex'
	export default {
		components:{
			uniList,
			uniListItem
		},
		data() {
			return {
				userinfo:'',
				img:'../../static/imgs/th.jpg',
				username:'新用户',
				area:'中国'
			}
		},
		computed:{
			...mapState(['hasLogin','token'])
		},
		onLoad() {
			uni.getSavedFileList({
				complete(res) {
					_this.img = res.fileList[0].filePath;
				}
			})
		},
		onShow:function(){
			var _this = this;
			uni.request({
				url:'http://kdjk.c5ppc.cn/user',
				data:{
					token:_this.token
				},
				success(res) {
					let data = typeof res.data == "string" ? JSON.parse(res.data) : res.data;
					_this.username = data.data[0].name;
					_this.area = data.data[0].area;
					_this.img = data.data[0].head;
				},
				fail:function(err){
					console.log(err);
				}
			})
		},
		methods: {
			...mapMutations(['logout']),
			tap(){
				var _this = this;
				uni.chooseImage({ //选择一个图片
					success:function(res1){
						uni.uploadFile({ //然后提交图片
							url:'http://kdjk.c5ppc.cn/user_head',
							filePath:res1.tempFilePaths[0],
							name:'head',
							formData:{
								token:_this.token
							},
							success:function(res){ 
								let data = typeof res.data == "string" ? JSON.parse(res.data) : res.data;
								uni.saveFile({
									tempFilePath:res1.tempFilePaths[0],
									success:function(filepath){ //提交成功后保存到本地
										console.log(filepath);
										uni.getSavedFileList({ //获取已经保存的头像图片
											success:function(res){
												var image = res.fileList[1].filePath;
												_this.img = image;
												var oldimg = res.fileList[0].filePath;
												console.log(_this.img);
												uni.removeSavedFile({ //然后删掉旧图片
													filePath:oldimg,
													success() {
														console.log("删除成功")
													}
												})
											}
										})
									},
									fail:function(err) {
										console.log(err);
									},
								})
								if(data.code==10010){
									uni.showLoading({
										title:'请稍后...',
										success:function(){
											uni.hideLoading();
											uni.showToast({
												title:'修改成功！'
											})
										}
									})
								}else{
									uni.showToast({
										title:'估计本地出了什么问题',
										icon:'none'
									})
								}
							},
							fail:function(res){
								uni.showToast({
									title:'口袋健康可能出了点问题...',
									icon:'none'
								})
							}
						})
					}
				});
			
			},
			bindLogin() {
			    uni.navigateTo({
			        url: '../loginRegister/loginRegister',
			    });
			},
			bindLogout() {
			    this.logout();
			},
			navigateTo(pages){
				let url='../'+pages+'/'+pages;
				console.log(url);
				uni.navigateTo({
				    url: url
				});
			}
		}
	}
</script>

<style>

</style>
