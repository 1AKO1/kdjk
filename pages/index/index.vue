<template>
	<view style="background-color: #F8F8F8;">
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
			    <view class="page-section-spacing">
			        <swiper class="swiper" indicator-dots="true" :autoplay="autoplay" :interval="interval" :duration="duration" circular="true">
			            <swiper-item>
							<image src="../../static/imgs/lunbo1.jpg" class="item"></image>
			            </swiper-item>
			            <swiper-item>
			                <image src="../../static/imgs/lunbo2.jpg" class="item"></image>
			            </swiper-item>
			            <swiper-item>
			                <image src="../../static/imgs/lunbo3.jpg" class="item"></image>
			            </swiper-item>
			        </swiper>
			    </view>
			</view>
		</view>
		<view class="btn-area">
			<view class="btn-area-item">
				<image src="../../static/imgs/jiangbei.png" class="icons"></image>
				<view :class="['button',toNewTabs==1?'actived':'']" @click="toNewTabs=1">推荐</view>
			</view>
			<view class="btn-area-item">
				<image src="../../static/imgs/huo.png" class="icons"></image>
				<view :class="['button',toNewTabs==2?'actived':'']" @click="toNewTabs=2">最热</view>
			</view>
			<view class="btn-area-item">
				<image src="../../static/imgs/xingxing.png" class="icons"></image>
				<view :class="['button',toNewTabs==3?'actived':'']" @click="toNewTabs=3">收藏</view>
			</view>
			<view class="btn-area-item">
				<image src="../../static/imgs/dengpao.png" class="icons"></image>
				<view :class="['button',toNewTabs==4?'actived':'']" @click="toNewTabs=4">最新</view>
			</view>
		</view>
		<navigator :url="item.url" open-type="navigate" hover-class="other-navigator-hover" v-for="item in lists" v-bind:key="item.id" v-show="toNewTabs == 1">
			<view class="list">
				<image :src="item.image" mode="widthFix" class="list_img"></image>
				<view class="list_child">
					<view class="list_title">
						<text>{{item.list_title}}</text>
					</view>
					<view class="list_content">
						<text>{{item.list_content}}</text>
					</view>
				</view>
			</view>
		</navigator>
		<navigator :url="item.url" open-type="navigate" hover-class="other-navigator-hover" v-for="item in lists1" v-bind:key="item.id" v-show="toNewTabs == 2">
			<view class="list">
				<image :src="item.image" mode="widthFix" class="list_img"></image>
				<view class="list_child">
					<view class="list_title">
						<text>{{item.list_title}}</text>
					</view>
					<view class="list_content">
						<text>{{item.list_content}}</text>
					</view>
				</view>
			</view>
		</navigator>
		<navigator :url="item.url" open-type="navigate" hover-class="other-navigator-hover" v-for="item in lists2" v-bind:key="item.id" v-show="toNewTabs == 3">
			<view class="list">
				<image :src="item.image" mode="widthFix" class="list_img"></image>
				<view class="list_child">
					<view class="list_title">
						<text>{{item.list_title}}</text>
					</view>
					<view class="list_content">
						<text>{{item.list_content}}</text>
					</view>
				</view>
			</view>
		</navigator>
		<navigator :url="item.url" open-type="navigate" hover-class="other-navigator-hover" v-for="item in lists3" v-bind:key="item.id" v-show="toNewTabs == 4">
			<view class="list">
				<image :src="item.image" mode="widthFix" class="list_img"></image>
				<view class="list_child">
					<view class="list_title">
						<text>{{item.list_title}}</text>
					</view>
					<view class="list_content">
						<text>{{item.list_content}}</text>
					</view>
				</view>
			</view>
		</navigator>
		<view style="display: flex;flex-direction: row;width: 100%;align-items: center;height: 7%;">
			<view style="border: #BBBBBB solid 1rpx;width: 37%;height: 0rpx;"></view>
			<text style="font-size: 24rpx;color: #949697;">我也是有底线的</text>
			<view style="border: #BBBBBB solid 1rpx;width: 38%;height: 0rpx;"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists:[
					{id:1,url:'../detail/detail?id=5d98441cca38ac75f0618d0a&e=1',image:'../../static/imgs/50581bf6-3217-4e0d-b988-965bbb75ce1d.jpg',list_title:'干柠檬真的能补充VC吗?',list_content:'科学研究证明，柠檬汁含有大量的果胶纤维，有助于消除体内饥饿感，减少食物的摄入，从而达到减肥的目的。外国科学研究证实，定期喝一大杯柠檬片泡水，它会降低你身体内的酸性物质，很多身上有炎症的病人在遵医嘱喝柠檬汁后，炎症很快就消退了。'},
					{id:2,url:'../detail/detail?id=5d984444ca38ac75f0618d0b&e=1',image:'../../static/imgs/shuiguo.jpg',list_title:'只吃水果真的能减肥吗？',list_content:'入夏以后各类瓜果相继上市，这可乐坏了喜欢吃水果和打算吃水果减肥的小姐姐们。吃水果真的可以变瘦吗？水果的味道可口，并且水分大、食物纤维含量高，维生素和矿物质含量丰富，所以大部分的水果的确对减肥瘦身有着辅助性的作用。但不是吃了水果就能瘦，并且只吃水果也不能变瘦。'},
					{id:3,url:'../detail/detail?id=5d984458ca38ac75f0618d0c&e=1',image:'../../static/imgs/paigu.jpg',list_title:'骨头汤真的是大补吗？',list_content:'虽然骨头里含大量钙，但里面的钙都是以磷酸盐的形式存在，极难溶于水，而且骨头里含很多黄骨髓，黄骨髓的成分以脂肪为主，所以为们常喝的骨头汤其实钙含量很低，很多了还会导致脂肪摄入过多。看10杯骨头汤的钙含量都比不上一杯牛奶的钙含量。'},
					{id:4,url:'../detail/detail?id=5d984472ca38ac75f0618d0d&e=1',image:'../../static/imgs/5b697aeaN1c79a102.jpg',list_title:'真有食物相克的说法吗?',list_content:'很多食物导致身体不适不是因为相克，更多是因为食用方式不当，比如未煮熟，食用过多，还有就是食物过敏，或是吃了致病菌污染的食物。举个人们常说的虾和维生素C同吃会生成剧毒的砒霜，事实却是你至少得吃100多公斤的虾才会中毒。机体的代谢能力是足够应付这些食物反应的。'}
				],
				lists1:[
					{id:1,url:'../detail/detail?id=0&e=2',image:'../../static/imgs/v2-000f1c1ae3e7ae215e216912aa81e647_1200x500.jpg',list_title:'中药究竟应该吃多长时间？',list_content:'无论是中药汤剂还是中成药，相信很多人吃中药时都会有一个困惑：这药吃到啥时候？换句话说，就是治疗的疗程是多长时间？也许你并不知道，就是这样一个简单地问题，实际上并不容易回答。首先，与西药不同，很多中医临床指南、中药学教材中并没有明确地提出中药治疗的疗程概念，缺少能够规范中药治疗疗程的信息和资料。'},
					{id:2,url:'../detail/detail?id=1&e=2',image:'../../static/imgs/v2-a919f748741862c8f922f5d5aee6e630_1200x500.jpg',list_title:'口腔异味可辨疾病!',list_content:'中医可通过患者口腔中异常的味道来判断你的身体状况。口甜：中医认为多是脾胃湿热、肝脾疾火内蕴所致。多见于糖尿病和消化功能紊乱。口酸：中医认为是肝胆之热乘脾所致。口酸多见于胃炎、胃及十二指肠溃疡病。口苦：中医认为是肝胆有热、胆气熏蒸所致。口苦常与胆汁代谢失常有关，多见于急慢性肝炎、胆囊炎、胆结石和肝胆肿瘤等。'},
					{id:3,url:'../detail/detail?id=2&e=2',image:'../../static/imgs/138200775_15659361963161n.jpg',list_title:'亚健康是什么？怎么界定？',list_content:'亚健康内涵丰富，外延广泛。可以这么说，健康概念的范围有多大，亚健康的涵盖范围就有多大；疾病和病症谱涉及领域有多宽，亚健康谱的涉及范围就有多宽。概括我们中心近年来的研究成果和多数专家的研讨意见，亚健康的分类和主要内容可概括为如下几个方面。1.以人四位一体的健康新概念为依据，亚健康可划分为：（1）躯体亚健康。主要表现为不明原因或排除疾病原因的体力疲劳、虚弱、周身不适、性功能下降和月经周期紊乱等；'},
					{id:4,url:'../detail/detail?id=3&e=2',image:'../../static/imgs/hanre.jpg',list_title:'寒热往来的病因是什么',list_content:'很多人都想了解寒热往来的病因是什么？为此，医学教育网编辑特别整理了这篇关于寒热往来的病因是什么的文章，具体如下：①邪入少阳往来寒热，胸胁苦满，兼有心烦喜呕，不思饮食，口苦咽干，目眩，舌边红，苔薄白，脉弦数。②湿热郁阻往来寒热如疟，口渴心烦，脘闷，腹胀，呕恶身热，医学教育网|搜集整理午后较重，入夜尤甚，天明得汗诸症稍减，但胸腹灼热不除，苔黄白而腻，脉弦数。'}
				],
				lists2:[
					{id:1,url:'../detail/detail?id=4&e=2',image:'../../static/imgs/kouchou.jpg',list_title:'口臭的中药治疗方法',list_content:'口臭，是指从口腔发出异味，如何治疗口臭？以下为大家推荐了16种中药治疗口臭的偏方，选择以下推荐的中药，或内服、或漱口、或含于口中，对治疗口臭有效果。口臭的中药治疗方法有那些？16种中药偏方：1、茉莉花茶适量含于口中。2、桂花3克沸水沏代茶频频内服。3、藿香10克水煎取其药汁含漱口。4、藿香15克，冰片5克，荷叶10克水煎取药汁每于饭后漱口。5、藿香、佩兰各6克水煎取药汁含漱口。'},
					{id:2,url:'../detail/detail?id=5&e=2',image:'../../static/imgs/shucai.jpg',list_title:'常吃七种蔬菜帮助你自然美白',list_content:'这个夏季最重要的问题就是如何美白了？女人不仅要防晒，保湿祛斑等，美白也是很重要的。今天小编就教你吃蔬菜来自然美白，以下7种蔬菜吃了能美白哦，必须坚持哦。豌豆多吃豌豆可以祛斑驻颜，《本草纲目》称豌豆具有“祛除黑斑，令面光泽”的功效。现代研究发现，豌豆含有丰富的维生素A原，这种物质可在体内转化为维生素A，而维生素A具有润泽皮肤的作用，而且是从一般食物中摄取，不会产生毒副作用。吃豌豆还有消肿、舒展皮肤的功能，能拉紧眼睛周围的皱纹。'},
					{id:3,url:'../detail/detail?id=6&e=2',image:'../../static/imgs/queban.jpg',list_title:'中医秘方去除雀斑',list_content:'1、中药--茯苓敷面将白茯苓磨成细粉，蜂蜜来调匀，每天晚上进行敷面，白天起来洗净，长期坚持用，半月就可见到明显的效果。2、西药--VC口服我们都知道女人补充VC是美白最好的途径，医学教育网|搜集整理因为它不仅可以美白更能够淡化色斑，每天坚持服用，也能够帮助去雀斑。3、食疗--香菜水将香菜熬成汤，每天洗脸，时间长了自然就会消除雀斑。4、水果疗法--柠檬柠檬是VC之王，饮用柠檬水不仅可以美白肌肤，更可以防止黑色素沉淀，对祛斑效果也很明显。'},
					{id:4,url:'../detail/detail?id=7&e=2',image:'../../static/imgs/doudou.jpg',list_title:'鼻子上长痘痘是什么原因',list_content:'鼻子历来是大家肌肤护理的一大难题，长痘痘、长黑头、毛孔粗大等肌肤问题的主要发源地就在鼻子。而鼻子上无论有什么肌肤问题，都会很影响一个人的形象。那么，鼻子上长痘痘是什么原因呢？要想鼻子的肌肤你能够变得白皙，就来看吧。下面，小编就向大家分析鼻子上长痘痘的几点原因以及解决方法。鼻子上长痘痘的原因一：内分泌失调压力、饮食习惯以及生理期的来临都会改变原本平衡的雌雄性激素分泌，导致皮脂腺分泌过旺，脸部毛孔阻塞，引发痘痘。'}
				],
				lists3:[
					{id:1,url:'../detail/detail?id=8&e=2',image:'../../static/imgs/zhenjiu.jpg',list_title:'针灸止痛之谜',list_content:'长期以来，针灸疗法一直困扰着西方的医学专家，这并不奇怪。针灸理论认为，有一种叫做“气”的无形生命能量在人体14条经脉中往复运行，而病痛是由于气的阻滞和失衡所引发的。针灸师相信，在人体一些特定的点上插入细针，就能帮助经脉畅通，从而治疗一切疾病。听上去有点像天方夜谭，但针灸确实能对人体产生作用。神经影像学研究表明，针灸似乎能安抚脑部掌管痛觉的区域，并激活那些涉及休息和康复功能的脑部区域。超声技术显示，针灸能增强治疗部位的血液循环。'},
					{id:2,url:'../detail/detail?id=9&e=2',image:'../../static/imgs/4021.jpg_wh860.jpg',list_title:'吃中药的禁忌',list_content:'为了保障中药的疗效使其更好的发挥其治疗作用，服用中药时是需要对一些食物忌口的，通常应该注意的有以下几点：吃中药的禁忌一、辛辣类：此类食物多辛热，有通阳健胃之功效，若过多食用则易生痰动火，散气耗血，故该类饮食仅适合于寒证疾病者，而不适于阴虚阳亢之体及血证、温病、痔瘘、痈疖患者等。医学教育|网搜集整理此类食物包括葱、蒜、韭菜、生姜、酒、辣椒等。如辣椒属热性，若有发热、便秘、尿短赤、口干渴、唇燥、咽喉肿痛、鼻衄、舌质红等热象者食用，必然会加重“上火”症状'},
					{id:3,url:'../detail/detail?id=10&e=2',image:'../../static/imgs/b_0_201811051903448208.jpg',list_title:'针灸美容的优势有哪些',list_content:'健形养神，又称神气，是人体生命活动的特征。一个人的精神容貌则是人体精、气、神的充分体现，而气血是神志活动的物质基础，神赖气血奉养而精明。根据中医“形神合一”及“形与神俱”的理论，针灸临床历来注重“形与神”而强调以“神”为主。针灸就其保健延年、美容美形方面可谓形神兼备，以神养形，以神治形，充分调动人体自身的积极因素，调理脏腑，运行气血，使肌肤得濡润，毛发获滋养。若出现面色萎黄或苍白，面容憔悴，皮肤苍老晦暗、弹性减弱，皱纹渐增，腹部脂肪堆积等，可以通过针灸调节使其精充气足，容光焕发。'},
					{id:4,url:'../detail/detail?id=11&e=2',image:'../../static/imgs/baguan.jpg',list_title:'拔罐治疗有哪些保健功效？',list_content:'您想知道拔罐治疗有哪些保健功效吗？相信您看了这篇有关拔罐治疗有哪些保健功效的文章，您就了解了。拔罐疗法，是中国传统医学中的一种特色疗法，广泛运用于民间，因古时多用兽角制罐，故称为“角法”。拔罐是以罐为工具，利用燃烧、抽吸、蒸气等方法造成罐内负压，使罐吸附于体表，以产生良性刺激，拔罐具有沟通表里、疏通经络、扶正祛邪、行气活血、消肿止痛、祛风散寒、拔毒泻热、调和气血、缓解疲劳等作用，是一种以调整机体功能、防治疾病目的的外治方法。作为一种“绿色”的物理疗法，因其安全、有效而日益受到青睐。'}
				],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				toNewTabs:1,
			}
		},
		onLoad() { 

		}
	}
</script>

<style>
	.list{
		display: flex;
		flex-direction:row;
		padding: 20rpx;
		width: 100%;
		height: 30%;
		background-color: #FFFFFF;
		margin-bottom: 18rpx;
	}
	.button{
		width: 100% ! important;
		font-size: 35rpx;
		/* height: 100%; */
		margin-left: 0rpx;
		margin-right: 50rpx;
		background-color: #FFFFFF ! important;
		padding: 0;
		margin-right: 92rpx;
		text-align: center;
		/* border: #333333 solid 2rpx; */
	},
	/* .button1{
		border-right: #333333 solid 2rpx;
	}, */
	.list_img{
		width: 400rpx;
		height: 50%;
		margin-left: 8rpx;
		margin-right: 25rpx;
		margin-top: 8rpx;
	},
	.list_child{
		display: flex;
		flex-direction:column;
		margin-right: 35rpx;
		/* font-size: 30rpx; */
		width: 95%;
	},
	.list_title{
		font-size: 33rpx;
		font-weight: 500;
		/* font-weight: 500; */
		/* align-items: center; */
	},
	.list_content{
		font-size: 26rpx;
		overflow: hidden;
		text-overflow:ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		/* width:100%; */
		/* font-size: 14px; */
		color: #666;
	}
	.btn-area{
		display: flex;
		justify-content:center;
		width: 100%;
		height: 15%;
		align-items: center;
		background-color: #FFFFFF;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}
	.btn-area-item{
		/* background: #007AFF; */
		display: flex;
		flex-direction: column;
		
	}
	.item{
		width: 100%;
		height: 100%;
	}
	.actived{
		color: #C75C5C !important;
	}
	.icons{
		width: 90rpx;
		height: 90rpx;
		margin: 0 auto;
	}
</style>
