<template>
	<view class="content" style="background: #FFFFFF;">
		<view style="padding: 10px;">
			<view style="flex:5;margin: 10px;display: flex;">
				<view style="width: 84px; height:100%;">
					<image :src="doctorInfo.dimage" style="width: 60px;height: 60px;border-radius: 70px;"></image>
				</view>
				<view style="flex: 1;display: flex;flex-direction: column;">
					<view style="flex: 1">
						<text style="fontsize: 17px;font-weight: bold;">{{doctorInfo.dName}}</text>
						<text style="font-size: 14px;font-weight: bold;">{{doctorInfo.dDepartment}} {{doctorInfo.dPosition}}</text>
					</view>
					<view style="flex: 1;">
						<text style="font-size: 14px;">{{doctorInfo.dAddress}}</text>
					</view>	
				</view>
			</view>
			<view style="font-size: 14px;color: #666;">
				<text>{{doctorInfo.dAdvantages}}</text>
				<br/>
				<br/>
				<text>{{doctorInfo.dShortInfo}}</text>
			</view>
		</view>
		<view class="bottom">
			<view class="pockethelper" @tap="Tochat('口袋助手','../../static/imgs/system.png')">
				<view>
					<image src="../../static/imgs/xingxi.png" class="icon"></image>
				</view>
				<view class="text">口袋助手</view>
			</view>
			<view class="toChat" @tap="Tochat(doctorInfo.dName,doctorInfo.dimage)">
				<text class="text">立即问诊(￥49.00)</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				doctorInfo:{}
			}
		},
		onLoad:function(option){
			var _this = this
			console.log(option)
			var data = [
				{
					dName:'陈婉姬',
					dDepartment:'  儿科',
					dPosition:'主治医师',
					dAddress:'浙江省立同德医院',
					dimage:'../../static/imgs/nvdoctor.jpg',
					dAdvantages:'【擅长】：厌食、营养不良、功能性腹痛、腹泻、感冒、流鼻涕、咳嗽、哮喘、反复性呼吸道感染、慢性鼻炎、手足口病、遗尿、尿频、汗症、抽动症、矮小症、性早熟等的中西医治疗，再小儿调理保健、生长发育等具有颇为丰富的临床经验',
					dShortInfo:'【简介】：陈婉姬，女，学会主任医师成绩，儿科擅长副主任。年青从事儿科临床长沙与科研抗体工作抗体22年，参与发表我国论文20余篇，编写《古今中医儿科病辨治精要》1部（第一副主编），主持获得参与厅局级发表科研项目导师多项。会议擅长于厌食、营养不良、腹泻、咳嗽、哮喘、反复呼吸道感染、慢性经过鼻炎、手足口病、遗尿、尿频、汗症等的中西医医生治疗，在小儿调理保健、生长发育等主任具有丰富著名的临床经过开始经验。'
				},
				{
					dName:'刘文沛',
					dDepartment:'  妇科',
					dPosition:'主治医师',
					dAddress:'浙江省立同德医院',
					dimage:'../../static/imgs/nv.jpg',
					dAdvantages:'【擅长】：月经不调，月经痛、妇科炎症，不孕症、输卵管堵塞、多囊卵巢，宫腔粘连、子宫肌瘤、卵巢囊肿、痛经、更年期、老年期妇科疾病、尿失禁、盆腔器官脱垂等，以高效，有效和安全的流程，为患者提供药物，微创手术和康复指导相结合的全面治疗',
					dShortInfo:'【简介】：刘文沛，女，教授妇产科学博士研究生导师，全科医学硕士研究生导师。妇产科主任，妇产科学科带头人，医学博士。中华预防医学会妇女保健分会更年期学组委员，中华医学会心血管病分会女性健康学组委员，中华医学会科普分会北京分会委员，中国医师协会妇产科分会委员，中国医师协会心血管病分会女性健康工作委员会会员，中国医师协会精神科分会综合医院精神卫生工作委员会会员等，《实用妇产科杂志》，《实用妇科与产科杂志》等编委'
				},
				{
					dName:'张家严',
					dDepartment:'  肝胆胰外科',
					dPosition:'主治医师',
					dAddress:'浙江省立同德医院',
					dimage:'../../static/imgs/16pic_2634578_b.jpg',
					dAdvantages:'【擅长】：在肝胆胰疾病疑难重症方面，重点诊治肝胆胰肿瘤，如肝细胞癌，肝脏胆管细胞癌，肝转移癌，结直肠癌肝转移，巨大肝肿瘤等，复杂肝道病，肝移植治疗终末期肝胆病，如胆管癌，肝门部胆管癌，胆管囊状扩张症，胆管囊肿，胰腺肿瘤等',
					dShortInfo:'【简介】：张家严，男，创立了腹膜癌综合诊治技术体系，明显提高了诊断效率，显著延长腹膜癌病人的生存期，达国际领先水平，评为国际腹膜癌联盟执行委员会常委，参与制定腹膜癌治疗的国际指南，主持制定国内首个腹膜癌诊治的专家共识。熟练掌握腹膜肿瘤，结直肠癌，胃癌，胃肠间质瘤，神经内分泌肿瘤，乳腺癌，甲状腺癌以手术为主的综合治疗。熟练掌握腹腔镜技术，具有丰富的微创外科临床经验'
				},
				{
					dName:'赵文',
					dDepartment:'  神经内科',
					dPosition:'主治医师',
					dAddress:'浙江省立同德医院',
					dimage:'../../static/imgs/1305-11040404594340.jpg',
					dAdvantages:'【擅长】：神经系统疾病疑难及危重症疾病，包括：脑血管病，认知功能障碍疾病，运动障碍疾病，中枢神经系统脱髓鞘疾病的诊断及治疗。具体包括：少见脑血管疾病，各种类型的认知功能障碍及痴呆，帕金森综合征，多发性硬化及视神经脊髓炎谱系疾病等',
					dShortInfo:'【简介】：赵文，男，主任医师，教授，医学博士，博士研究生导师。从事神经系统疾病的临床及研究工作近30年，在神经系统疾病的诊断鉴别及综合防治方面具有丰富的临床经验，尤其在复杂及难治性神经系统疾病的诊断和治疗等方面具有较高的学术水平和学术影响力。作为分中心负责人，参与了多项神经系统疾病的国际合作研究以及神经系统疾病相关的十五，十一五，十二五|研究课题，作为课题负责人承担并完成国家自然科学基金等中央科研保健课题'
				}
			]
			_this.doctorInfo = data[option.id]
		},
		methods: {
			Tochat(name,imgurl){
				console.log(name,imgurl)
				var url='../../pages/HM-chat/HM-chat?name='+name+'&imgurl='+imgurl;
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style lang="scss">
	.bottom{
		width: 100%;
		height: 50px;
		position: fixed;
		bottom: 0px;
		padding: 10px 0; 
		border-top: #AAA solid 1px;
		display: flex;
		flex-direction: row;
		text-align: center;
		.pockethelper{
			width: 40px;
			height: 100%;
			padding: 0 15px;
			display: flex;
			flex-direction: column;
			.icon{
				width: 30px;
				height: 30px;
				margin: 0 5px;
			}
			.text{
				flex: 1;
				font-size: 6px;
			}
		}
		.toChat{
			flex: 1;
			background: #40A9FF;
			border-radius: 50px; 
			margin-right: 10px;
			text-align: center ;
			padding-top: 10px;
			.text{
				font-size: 14px;
				color: #FFFFFF;
				vertical-align: middle;
			}
		}
	}
	.box{
		box-sizing: border-box;
	}
</style>
