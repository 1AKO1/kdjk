<template>
	<view class="content">
		<view v-if="!hasLogin">
			<view class="notLogin">
				<view class="text">登陆后可进行问诊</view>
				<view class="button">
					<button type="primary" class="primary" size="mini" hover-class="click" form-type="submit" @tap="turnTo">登录</button>
				</view>
			</view>
		</view>
		<view v-if="hasLogin"  style="padding:0 10px">
			<view class="selectBar">  
				<view style="flex:2">
					<text class="text">全部科室</text>
					<image src="../../static/icons/down.png" class="icon"></image>
				</view>
				<view style="flex:3;">
					<text class="text">全国</text>
					<image src="../../static/icons/down.png" class="icon"></image>
				</view>
			</view>
			<navigator :url="item.url" v-for="item in doctorlist" :key="item.id">
				<view style="background: #FFFFFF;height:166px;border-bottom: #AAAAAA solid 1px; display: flex;flex-direction: column;padding: 45px 10px 0 10px;">
					<view style="flex:5;display: flex;">
						<view style="width: 84px; height:100%;">
							<image :src="item.img" style="width: 70px;height: 70px;border-radius: 70px;"></image>
						</view>
						<view style="flex: 1;display: flex;flex-direction: column;">
							<view style="flex: 1">
								<text style="font-weight: bold;font-size: 17px;">{{item.dName}}</text>
								<text style="font-size: 14px;font-weight: bold;">{{item.dDepartment}} {{item.dPosition}}</text>
							</view>
							<view style="flex: 1;">
								<text style="font-size: 14px;">{{item.dAddress}}</text>
							</view>
						
						</view>
						<view style="width: 20px;">
							<image src="../../static/icons/next.png" style="width:30px;height: 30px;"></image>
						</view>
					</view>
					<view style="flex:3;margin-right: 10px;">
						<view style="height:20px; padding-left: 5px;">
							<text style="overflow: hidden;
								text-overflow:ellipsis;
								display: -webkit-box;
								-webkit-line-clamp: 2;
								-webkit-box-orient: vertical;
								width:100%;
								font-size: 14px;
								color: #666;
							">{{item.dAdvantages}}</text>
						</view>
					</view>
					<view style="flex:2;margin-right: 10px; padding-left: 5px;">
						{{item.dPrice}}<text style="font-size: 14px;">.00</text>
					</view>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				doctorlist:[
					{id:0,img:'../../static/imgs/nvdoctor.jpg',url:'../doctorDetail/doctorDetail?id=0',dName:'陈婉姬  ',dDepartment:'儿科',dPosition:'主治医师',dAddress:'浙江省立同德医院',dAdvantages:'擅长：厌食、营养不良、功能性腹痛、腹泻、感冒、流鼻涕、咳嗽、哮喘、反复性呼吸道感染、慢性鼻炎、手足口病、遗尿、尿频、汗症、抽动症、矮小症、性早熟等的中西医治疗，在小儿调理保健、生长发育等具有颇为丰富的临床经验',dPrice:'￥49'},
					{id:1,img:'../../static/imgs/nv.jpg',url:'../doctorDetail/doctorDetail?id=1',dName:'刘文沛  ',dDepartment:'妇科',dPosition:'主治医师',dAddress:'浙江省立同德医院',dAdvantages:'擅长：月经不调，月经痛、妇科炎症，不孕症、输卵管堵塞、多囊卵巢，宫腔粘连、子宫肌瘤、卵巢囊肿、痛经、更年期、老年期妇科疾病、尿失禁、盆腔器官脱垂等，以高效，有效和安全的流程，为患者提供药物，微创手术和康复指导相结合的全面治疗',dPrice:'￥49'},
					{id:2,img:'../../static/imgs/16pic_2634578_b.jpg',url:'../doctorDetail/doctorDetail?id=2',dName:'张家严  ',dDepartment:'肝胆胰外科',dPosition:'主治医师',dAddress:'浙江省立同德医院',dAdvantages:'擅长：在肝胆胰疾病疑难重症方面，重点诊治肝胆胰肿瘤，如肝细胞癌，肝脏胆管细胞癌，肝转移癌，结直肠癌肝转移，巨大肝肿瘤等，复杂肝道病，肝移植治疗终末期肝胆病，如胆管癌，肝门部胆管癌，胆管囊状扩张症，胆管囊肿，胰腺肿瘤等',dPrice:'￥49'},
					{id:3,img:'../../static/imgs/1305-11040404594340.jpg',url:'../doctorDetail/doctorDetail?id=3',dName:'赵文  ',dDepartment:'神经内科',dPosition:'主治医师',dAddress:'浙江省立同德医院',dAdvantages:'擅长：神经系统疾病疑难及危重症疾病，包括：脑血管病，认知功能障碍疾病，运动障碍疾病，中枢神经系统脱髓鞘疾病的诊断及治疗。具体包括：少见脑血管疾病，各种类型的认知功能障碍及痴呆，帕金森综合征，多发性硬化及视神经脊髓炎谱系疾病等',dPrice:'￥49'}
				]
			}
		},
		computed:{
			...mapState(['hasLogin']),
		},
		methods:{
			turnTo:function(e){
				uni.navigateTo({
					url:'../loginRegister/loginRegister',
				})
			}
		}
	}
</script>

<style lang="scss">
	.selectBar{
		height: 35px;
		width:100%; 
		display: flex;
		position: fixed;
		background: #F8F8F8;
		z-index: 999;
		.text{
			vertical-align: middle;
			font-size: 14px;
			color: #40A9FF; 
			padding-left: 30upx;
		}
		.icon{
			width: 14px; 
			height: 14px;
			margin-left: 10upx;
		}
	}
	.notLogin{
		margin: 30vh auto;
		width: 150px;
		height: 50px;
		.text{
			font-size: 18px;
			text-align: center;
			height: 25px;
			width: 100%;
		}
		.button{
			width: 70px;
			margin: 10px auto;
			height: 25px;
		}
	}
</style>
