<template>
	<view class="content" style="background: #FFFFFF;">
		<view style="width: 100%;background: #E5EAEC; display: flex;" @tap="navigateTo('口袋助手','../../static/imgs/system.png')">
			<view style="width: 70px;height: 70px;">
				<view style="width: 50px;height: 50px;border-radius: 50px; background: #007AFF; overflow: hidden; margin: 10px auto;">
					<image src="../../static/imgs/system.png" style="width: 50px;height: 50px;"></image>
				</view>
			</view>
			<view style="flex: 1;display: flex; padding-top: 10px;">
				<view style="flex: 2; font-size: 14px;">口袋助手</view>
				<view style="flex: 3;"></view>
				<view style="flex: 2; font-size: 12px;">2019.12.21</view>
			</view>
		</view>	
		
		<view style="width: 100%;background: #E5EAEC; display: flex;" @tap="navigateTo('系统提示','../../static/imgs/system.png')">
			<view style="width: 70px;height: 70px;">
				<view style="width: 50px;height: 50px;border-radius: 50px; background: #007AFF; overflow: hidden; margin: 10px auto;">
					<image src="../../static/imgs/system.png" style="width: 50px;height: 50px;"></image>
				</view>
			</view>
			<view style="flex: 1;display: flex; padding-top: 10px;">
				<view style="flex: 2; font-size: 14px;">系统提示</view>
				<view style="flex: 3;"></view>
				<view style="flex: 2; font-size: 12px;">2019.12.21</view>
			</view>
		</view>	
		<view style="width: 100%;border-bottom: #CCC solid 1px;display: flex;" v-for="item in messagelist" :key="item.id" @tap="navigateTo(item.name,item.imgurl)">
			<view style="width: 70px;height: 70px;">
				<view style="width: 50px;height: 50px;border-radius: 50px; background: #007AFF; overflow: hidden; margin: 10px auto;">
					<image :src="item.imgurl" style="width: 50px;height: 50px;"></image>
				</view>
			</view>
			<view style="flex: 1;display: flex; padding-top: 10px;">
				<view style="flex: 2; font-size: 14px;">{{item.name}}</view>
				<view style="flex: 3;"></view>
				<view style="flex: 2; font-size: 12px;">{{item.date}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				messagelist:[
					{id:1,name:'陈婉姬',imgurl:'../../static/imgs/nvdoctor.jpg',date:'2019.12.21'},
					{id:2,name:'刘文沛',imgurl:'../../static/imgs/nv.jpg',date:'2019.12.21'},
					{id:3,name:'张家严',imgurl:'../../static/imgs/16pic_2634578_b.jpg',date:'2019.12.21'},
					{id:4,name:'赵文',imgurl:'../../static/imgs/1305-11040404594340.jpg',date:'2019.12.21'}
				]
			}
		},
		methods: {
			navigateTo(name,imgurl){
				var url='../../pages/HM-chat/HM-chat?name='+name+'&imgurl='+imgurl;
				// console.log(url);
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style>

</style>
