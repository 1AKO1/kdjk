(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-detail"],{3624:function(t,i,e){"use strict";e.r(i);var a=e("b93e"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);i["default"]=n.a},9395:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticStyle:{width:"100%",height:"100%"}},[e("v-uni-view",{staticClass:"title"},[e("v-uni-text",[t._v(t._s(t.detailData.title))])],1),e("v-uni-view",{staticClass:"tip"},[e("v-uni-view",{staticClass:"tip_before"},[e("v-uni-text",[t._v("营养师小李")])],1),e("v-uni-view",{staticClass:"tip_text"},[e("v-uni-text",[t._v("2019.10.01")])],1)],1),e("v-uni-view",{staticClass:"img_view"},[e("v-uni-image",{staticClass:"img",attrs:{src:t.detailData.img1}})],1),e("v-uni-view",{staticClass:"text"},[e("v-uni-text",[t._v(t._s(t.detailData.part1))])],1),e("v-uni-view",{staticClass:"img_view"},[e("v-uni-image",{staticClass:"img_1",attrs:{src:t.detailData.img2}})],1),e("v-uni-view",{staticClass:"text"},[e("v-uni-text",[t._v(t._s(t.detailData.part2))])],1),e("v-uni-view",{staticClass:"img_view"},[e("v-uni-image",{staticClass:"img_1",attrs:{src:t.detailData.img3,mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"text"},[e("v-uni-text",[t._v(t._s(t.detailData.part3))])],1)],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},"9a0a":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@font-face{font-family:eosfont;font-family:eosfont;  /* project id 1428160 */src:url(//at.alicdn.com/t/font_1428160_02lrn0ypak6y.eot);src:url(//at.alicdn.com/t/font_1428160_02lrn0ypak6y.eot#iefix) format("embedded-opentype"),url(//at.alicdn.com/t/font_1428160_02lrn0ypak6y.woff2) format("woff2"),url(//at.alicdn.com/t/font_1428160_02lrn0ypak6y.woff) format("woff"),url(//at.alicdn.com/t/font_1428160_02lrn0ypak6y.ttf) format("truetype"),url(//at.alicdn.com/t/font_1428160_02lrn0ypak6y.svg#eosfont) format("svg")}.eosfont[data-v-4894455b]{font-family:eosfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.eosbaohudun-[data-v-4894455b]:before{content:"\\E600"}.title[data-v-4894455b]{width:100%;text-align:center;font-size:%?43?%;font-weight:400;padding:%?15?%}.tip[data-v-4894455b]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;\n\t/* margin-right: 200rpx */margin-right:%?20?%\n\t/* width: 100%; */}.tip_before[data-v-4894455b]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;font-size:%?30?%;color:grey;margin-bottom:%?5?%}.tip_text[data-v-4894455b]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;\n\t/* background-color: #007AFF; */-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;font-size:%?30?%;color:grey}.img_view[data-v-4894455b]{text-align:center}.img[data-v-4894455b]{width:90%;margin:0 auto}.text[data-v-4894455b]{font-size:%?32?%;padding:%?8?%;margin:%?8?%;text-indent:2em;line-height:%?55?%;margin-top:%?40?%;margin-bottom:%?40?%}.img_1[data-v-4894455b]{width:90%;margin:0 auto}\n\n/* .esofont{\n\twidth: 30%;\n} */',""])},"9d7e":function(t,i,e){"use strict";var a=e("e88f"),n=e.n(a);n.a},b93e:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{detailData:{},detailData1:{}}},onLoad:function(t){var i=this;if(1==t.e)uni.request({url:"http://kdjk.c5ppc.cn/article?article_id="+t.id,success:function(t){i.detailData=t.data.data[0]}});else{var e=[{title:"中药究竟应该吃多长时间？",img1:"https://pic4.zhimg.com/v2-000f1c1ae3e7ae215e216912aa81e647_1200x500.jpg",part1:"无论是中药汤剂还是中成药，相信很多人吃中药时都会有一个困惑：这药吃到啥时候？换句话说，就是治疗的疗程是多长时间？也许你并不知道，就是这样一个简单地问题，实际上并不容易回答。首先，与西药不同，很多中医临床指南、中药学教材中并没有明确地提出中药治疗的疗程概念，缺少能够规范中药治疗疗程的信息和资料。",img2:"https://pic1.zhimg.com/v2-536f5d7043e638473a7880fd3c66833b_b.jpg",part2:"其次，这个表象问题所体现出来的本质矛盾是，中药这种以辨证论治、随症加减和随证停药为特点的治疗学体系，并未将疗程设定为固定时间，而是根据患者病情的改善情况再不断调整，这种思路与西药降压药、降糖药终身服药的理念很不一样。所以，中药的治疗学特点决定了，由于你的机体状态在不断变化，所以长期服用固定组方配伍的药物是不妥的，疗程概念也就被淡化了。但是，临床治疗过程中，确实需要一个连续用药时长的参考。这个时候怎么办呢？",img3:"https://pic4.zhimg.com/v2-4ef83e6ed0474f52a4e6c9585091aa8f_b.jpg",part3:"一般而言，有2方面的资料可以供我们参考。第一，中成药说明书信息。一些中成药说明书会明确注明疗程，例如柴银口服液“连服3天”，金花清感颗粒“连服3-5天”复方丹参滴丸“4周为一个疗程”，荷丹片“8周为一疗程”等。说明书没有明确提到疗程的，可以参考已有疗程信息的同类中成药。第二，中药新药临床试验指导原则中，也包括了很多新药临床试验的推荐疗程时长，例如慢性支气管炎急性发作“一般为10天”，血瘀证“建议疗程不少于4周”，消化性溃疡“建议为4-8周”等，临床组方选药时，可以根据主治证选择恰当的疗程。"},{title:"口腔异味可辨疾病!",img1:"https://pic1.zhimg.com/v2-a919f748741862c8f922f5d5aee6e630_1200x500.jpg",part1:"口腔异味可辨疾病：中医可通过患者口腔中异常的味道来判断你的身体状况。口甜：中医认为多是脾胃湿热、肝脾疾火内蕴所致。多见于糖尿病和消化功能紊乱。口酸：中医认为是肝胆之热乘脾所致。口酸多见于胃炎、胃及十二指肠溃疡病。口苦：中医认为是肝胆有热、胆气熏蒸所致。口苦常与胆汁代谢失常有关，多见于急慢性肝炎、胆囊炎、胆结石和肝胆肿瘤等。",img2:"http://www.uooyoo.com/img2016/11/29/2016112961255189.jpg",part2:"口咸：中医认为是肾阴不足，虚火上浮所致医学|教育网整理。多见于神经官能症、慢性肾炎、慢性咽炎、口腔溃疡。口淡：中医认为是脾胃虚寒、运化无力所致。多见于消化系统与内分泌系统疾病，营养不良、维生素与微量元素锌缺乏症。口臭：中医认为是胃内饮食停滞、浊气上逆所致。多见于口腔疾患及消化不良，如口腔炎、咽炎、牙龈炎、口腔溃疡、龋齿、胃炎、胃及十二指肠溃疡、胃癌等。",img3:"http://5b0988e595225.cdn.sohucs.com/images/20180529/f887f936998a4af69c116d2801feef26.jpeg",part3:"口辣：中医认为是肺热或胃火上炎所致。多见于高血压、神经官能症、更年期综合征、长期低热。当然，口中异味还与饮食、饮酒、吸烟、睡眠、药物等有关，当口中出现异味时，要及时就医，找出原因。"},{title:"亚健康是什么？怎么界定？",img1:"http://www.xinhuanet.com/science/2019-07/05/138200775_15659361963161n.jpg",part1:"亚健康内涵丰富，外延广泛。可以这么说，健康概念的范围有多大，亚健康的涵盖范围就有多大；疾病和病症谱涉及领域有多宽，亚健康谱的涉及范围就有多宽。概括我们中心近年来的研究成果和多数专家的研讨意见，亚健康的分类和主要内容可概括为如下几个方面。",img2:"https://pic1.zhimg.com/v2-8c210c334bdc101cacb7cf8f855ecffe_1200x500.jpg",part2:"1.以人四位一体的健康新概念为依据，亚健康可划分为：（1）躯体亚健康。主要表现为不明原因或排除疾病原因的体力疲劳、虚弱、周身不适、性功能下降和月经周期紊乱等；（2）心理亚健康。主要表现为不明原因的脑力疲劳、情感障碍、思维紊乱、恐慌、焦虑、自卑以及神经质、冷漠、孤独、轻率，甚至产生自杀念头等；（3）社会适应性亚健康。突出表现为对工作、生活、学习等环境难以适应，对人际关系难以协调，即角色错位和不适应是社会适应性亚健康的集中表现；",img3:"http://www.dayichuancheng.com/d/file/content/2018/07/5b4d6209a43d6.jpg",part3:"2.按照亚健康概念的构成要素分类：（1）身心上有不适感觉，但又难以确诊的“不定陈述综合征”；（2）某些疾病的临床前期表现（疾病前状态）；（3）一时难以明确其病理意义的“不明原因综合征”，如更年期综合征、神经衰弱综合征、疲劳综合征等；"},{title:"寒热往来的病因是什么",img1:"http://leeyuming.com/wp-content/uploads/2014/08/1-e1407913119348.jpg",part1:"很多人都想了解寒热往来的病因是什么？为此，医学教育网编辑特别整理了这篇关于寒热往来的病因是什么的文章，具体如下：①邪入少阳往来寒热，胸胁苦满，兼有心烦喜呕，不思饮食，口苦咽干，目眩，舌边红，苔薄白，脉弦数。",img2:"http://5b0988e595225.cdn.sohucs.com/images/20181219/e1ccf0d094384b37a34f52c16f8d5924.jpeg",part2:"②湿热郁阻往来寒热如疟，口渴心烦，脘闷，腹胀，呕恶身热，医学教育网|搜集整理午后较重，入夜尤甚，天明得汗诸症稍减，但胸腹灼热不除，苔黄白而腻，脉弦数。③疟疾寒热往来，反复发作，发有定时，先恶寒，甚者寒战，继则壮热，最后汗出通身，热退身和，同时伴有头痛如裂，周身乏力，肢体疼痛，口渴引饮。如此反复发作，脉弦。",img3:"https://www.xincha.com/system/daily/stories/covers/000/029/369/medium/0?1545472090",part3:"发热，体温高出正常标准，或自有身热不适的感觉。发热原因，分为外感、内伤两类。外感发热，因感受六淫之邪及疫疠之气所致；内伤发热，多由饮食劳倦或七情变化，导致阴阳失调，气血虚衰所致。外感发热多实，见于感冒、伤寒、温病、瘟疫等病证；内伤多虚，有阴虚发热、阳虚发热、血虚发热、气虚发热、虚劳发热、阳浮发热、失血发热等"},{title:"口臭的中药治疗方法",img1:"http://www.xinhuanet.com//mil/2016-03/31/128851944_14593885008591n.png",part1:"口臭，是指从口腔发出异味，如何治疗口臭？以下为大家推荐了16种中药治疗口臭的偏方，选择以下推荐的中药，或内服、或漱口、或含于口中，对治疗口臭有效果。口臭的中药治疗方法有那些？",img2:"https://pic1.zhimg.com/50/v2-89f3a5fc622ac4124789a3eb0cc34960_hd.jpg",part2:"16种中药偏方：1、茉莉花茶适量含于口中。2、桂花3克沸水沏代茶频频内服。3、藿香10克水煎取其药汁含漱口医学教育网|整理。4、藿香15克，冰片5克，荷叶10克水煎取药汁每于饭后漱口。5、藿香、佩兰各6克水煎取药汁含漱口。6、葛根、藿香、白芷各12克，木香10克，公丁香6克水煎取其药汁含漱口。7、丁香2克含口中。8、桂枝适量研为细面，每取3克用沸水沏代茶服",img3:"https://img.heho.com.tw/wp-content/uploads/2018/04/%E4%BD%A0%E4%B9%9F%E6%9C%89%E6%83%B1%E4%BA%BA%E5%8F%88%E5%B0%B7%E5%B0%AC%E7%9A%84%E5%8F%A3%E8%87%AD%E5%95%8F%E9%A1%8C%E5%97%8E%EF%BC%9F%E8%A8%98%E4%BD%8F%E9%80%994%E5%80%8B%E6%96%B9%E6%B3%95%E6%94%B9%E5%96%84%E5%8F%A3%E8%87%AD.png",part3:"9、连翘6克研为细面用绿茶冲服。10、莲心20克，藕30克同入锅中煮至烂后服食，每日一次，连用一周。11、桑白皮、地骨皮、知母各10克，麦冬6克水煎内服，亦可漱口。12、银耳30克煮烂后加入蜂蜜10毫升充分搅匀后内服。13、大黄适量于锅中炒成炭与冰片共研为细面，每日晨起取适量药粉刷牙并用温开水漱口。14、草豆蔻30克，细辛10克共研为细面。每日3次取药面1克含口中。"},{title:"常吃七种蔬菜帮助你自然美白",img1:"http://n.sinaimg.cn/transform/20151012/rHxJ-fxirmpy1506982.jpg",part1:"这个夏季最重要的问题就是如何美白了？女人不仅要防晒，保湿祛斑等，美白也是很重要的。今天小编就教你吃蔬菜来自然美白，以下7种蔬菜吃了能美白哦，必须坚持哦。豌豆多吃豌豆可以祛斑驻颜，《本草纲目》称豌豆具有“祛除黑斑，令面光泽”的功效。现代研究发现，豌豆含有丰富的维生素A原，这种物质可在体内转化为维生素A，而维生素A具有润泽皮肤的作用，而且是从一般食物中摄取，不会产生毒副作用。吃豌豆还有消肿、舒展皮肤的功能，能拉紧眼睛周围的皱纹。",img2:"http://www.81.cn/zghjy/attachement/jpg/site351/20140312/18037330ff2d148a1a0614.jpg",part2:"土豆有关美白的蔬菜，还有“双豆”一说，双豆即土豆和豌豆。土豆含有丰富的B族维生素及大量的优质纤维素，还含有微量元素、蛋白质、脂肪和优质淀粉等营养元素。这些成分在抗老防病过程中有着重要的作用，能有效帮助女性身体排毒。其中含有丰富的维生素C让女性回复美白肌肤。此外，土豆中的粗纤维还可以起到润肠通便的作用。",img3:"https://img.88tph.com/production/20180107/12435859-1.jpg!/watermark/url/L3BhdGgvbG9nby5wbmc/align/center",part3:"胡萝卜胡萝卜被誉为“皮肤食品”，能润泽肌肤。它所含的β胡萝卜素，可以抗氧化和美白肌肤，还可以清除肌肤的多余角质，对油腻痘痘肌肤也有镇静舒缓的功效，蛋黄和蜂蜜有保湿的润肤效果。另外，胡萝卜含有丰富的果胶物质，可与汞结合，使人体里的有害成分得以排除，肌肤看起来更加细腻红润。"},{title:"中医秘方去除雀斑",img1:"http://5b0988e595225.cdn.sohucs.com/images/20180823/44502afea2d94952a5a1abce3258a881.jpeg",part1:"1、中药--茯苓敷面将白茯苓磨成细粉，蜂蜜来调匀，每天晚上进行敷面，白天起来洗净，长期坚持用，半月就可见到明显的效果。2、西药--VC口服 我们都知道女人补充VC是美白最好的途径，医学教育网|搜集整理因为它不仅可以美白更能够淡化色斑，每天坚持服用，也能够帮助去雀斑。",img2:"https://p1.pstatp.com/large/3c760002ebd7fe350fd3",part2:"3、食疗--香菜水将香菜熬成汤，每天洗脸，时间长了自然就会消除雀斑。4、水果疗法--柠檬 柠檬是VC之王，饮用柠檬水不仅可以美白肌肤，更可以防止黑色素沉淀，对祛斑效果也很明显。",img3:"https://mua.com.hk/wp-content/uploads/2016/10/201610-Ringo-freckles-Cover.png",part3:"5、废物利用--茄子皮将干净的茄子皮贴在脸上，以黑吸黑，一段时间过后脸上的黑斑也会不见啦。"},{title:"鼻子上长痘痘是什么原因",img1:"http://www.qudou86.com/d/file/qudoubuwei/bizi/8a028377aeb7bcbf0f4a18ee5b97c5bd.jpg",part1:"鼻子历来是大家肌肤护理的一大难题，长痘痘、长黑头、毛孔粗大等肌肤问题的主要发源地就在鼻子。而鼻子上无论有什么肌肤问题，都会很影响一个人的形象。那么，鼻子上长痘痘是什么原因呢？要想鼻子的肌肤你能够变得白皙，就来看吧。下面，小编就向大家分析鼻子上长痘痘的几点原因以及解决方法。",img2:"https://s9.rr.itc.cn/r/wapChange/20173_16_17/a8jtfb9489800490458.jpg",part2:"鼻子上长痘痘的原因一：内分泌失调压力、饮食习惯以及生理期的来临都会改变原本平衡的雌雄性激素分泌，雌激素和代谢会出现紊乱的现象，导致皮脂腺分泌过旺，脸部毛孔阻塞，引发痘痘。鼻子上长痘痘的原因二：压力熬夜压力和熬夜使得心火上浮、肝火过旺，毛细孔分泌过多油脂，堵塞毛孔，形成痘痘。",img3:"https://s9.rr.itc.cn/r/wapChange/20175_11_14/a09nx44828797346544.jpg",part3:"鼻子上长痘痘的原因三：螨虫感染螨虫的排泄的分泌物容易引起毛孔堵塞，随之毛孔就开始慢慢变粗，皮肤皮肤也变得越来油，如果没有及时治疗，就会引起皮肤发炎，就形成了我们所说的青春痘。选用温和且去油好的洁面乳"},{title:"针灸止痛之谜",img1:"https://pic4.zhimg.com/v2-1ca553a28aba01ce9b026467aaefa5e0_1200x500.jpg",part1:"长期以来，针灸疗法一直困扰着西方的医学专家，这并不奇怪。针灸理论认为，有一种叫做“气”的无形生命能量在人体14条经脉中往复运行，而病痛是由于气的阻滞和失衡所引发的。针灸师相信，在人体一些特定的点上插入细针，就能帮助经脉畅通，从而治疗一切疾病。听上去有点像天方夜谭，但针灸确实能对人体产生作用。",img2:"https://pic2.zhimg.com/50/v2-0898ce3392949c55e656e23e61c6a67d_hd.jpg",part2:"神经影像学研究表明，针灸似乎能安抚脑部掌管痛觉的区域，并激活那些涉及休息和康复功能的脑部区域。超声技术显示，针灸能增强治疗部位的血液循环。科学家还发现，古代中医理论与现代解剖学之间存在相似之处。365个穴位对应着人体的神经束和肌肉束，几条经脉与人体主要的大动脉和神经分布相仿。",img3:"http://d.ifengimg.com/q100/img1.ugc.ifeng.com/newugc/20190404/15/wemedia/b899eb38245ef73bfb44d3f06286723b87a38c98_size27_w569_h320.jpg",part3:"20世纪80年代初的研究发现，针灸产生作用的部分原因在于刺激人体释放出内啡因，这是一种让人感到愉悦的神秘天然化合物，很像体育锻炼后的那种舒适感觉。"},{title:"吃中药的禁忌",img1:"https://pic4.zhimg.com/v2-76df18259ec51b2bd0372f571f7afcf3_1200x500.jpg",part1:"吃中药的禁忌一、辛辣类：此类食物多辛热，有通阳健胃之功效，若过多食用则易生痰动火，散气耗血，故该类饮食仅适合于寒证疾病者，而不适于阴虚阳亢之体及血证、温病、痔瘘、痈疖患者等。医学教育|网搜集整理此类食物包括葱、蒜、韭菜、生姜、酒、辣椒等。如辣椒属热性，若有发热、便秘、尿短赤、口干渴、唇燥、咽喉肿痛、鼻衄、舌质红等热象者食用，必然会加重“上火”症状，从而抵消清热凉血及滋阴药物的功效，故热证病人就诊中医不可同食辣椒。",img2:"https://www.gyfwyy.com/Upload/201904/image2881320.png",part2:"吃中药的禁忌二、鱼腥类：此类食物多为咸寒而腥之品，且含有异性蛋白，易引起过敏反应，多食易伤脾胃并诱发疾病，故脾胃有病者不宜多吃，尤其是过敏体质者更不可食之。此类食物有黄鱼、鲤鱼、带鱼、蚌肉、虾、螃蟹等，而鲤鱼、沙丁鱼、鲇鱼、黄鱼、螃蟹、黄泥螺最易引起过敏。鱼腥类食物亦属发物。",img3:"https://inews.gtimg.com/newsapp_bt/0/8286109045/1000",part3:"吃中药的禁忌三、发物类：此类食物均为动风生痰助火之品，由于疾病对食物选择程度的大小不同，其“发”亦有异。此类食物有蘑菇、香蕈、笋、芥菜、南瓜、公鸡肉、猪头肉、母猪肉等。如肝阳上亢、医学教育|网搜集整理肝风内动患者当禁吃公鸡肉、猪头肉；疔、疖、疮、痈等皮肤疾患者，当禁吃香蕈、蘑菇、笋、公鸡肉、猪头肉、母猪肉，否则会加速红肿、生脓；有肠胃病者禁吃南瓜，因南瓜含有糖分，多吃会产生较多的酸，对胃肠有刺激。鉴此，“发”者，在很大程度上可以说有促进疾病恶化之意。"},{title:"针灸美容的优势有哪些",img1:"https://inews.gtimg.com/newsapp_bt/0/9217976655/1000",part1:"健形养神神，又称神气，是人体生命活动的特征。一个人的精神容貌则是人体精、气、神的充分体现，而气血是神志活动的物质基础，神赖气血奉养而精明。根据中医“形神合一”及“形与神俱”的理论，针灸临床历来注重“形与神”而强调以“神”为主。针灸就其保健延年、美容美形方面可谓形神兼备，以神养形，以神治形，充分调动人体自身的积极因素，调理脏腑，运行气血，使肌肤得濡润，毛发获滋养。若出现面色萎黄或苍白，面容憔悴，皮肤苍老晦暗、弹性减弱，皱纹渐增，腹部脂肪堆积等，可以通过针灸调节使其精充气足，容光焕发。",img2:"https://img.sandingtv.com/20180709/186a64b61b09edd7feddfa46f9b0cea6.jpg",part2:"利祛痤疮痤疮，又称“粉刺”，是一种临床常见的毛囊皮脂腺慢性炎症，好发于颜面、胸、背等皮脂腺发达的部位，若不及时治疗或防治不当，可遗留终身难愈的瘢痕而影响容貌。现代医学认为痤疮主要与雄激素、毛囊和皮脂腺内微生物有关。根据中医辨证分析，可将痤疮分为肺胃湿热型和血瘀痰凝型",img3:"https://pic2.zhimg.com/50/v2-0898ce3392949c55e656e23e61c6a67d_hd.jpg",part3:"通经消斑黄褐斑，临床上很常见，是指对称性发生于面部的淡褐色或深褐色色素斑，好发于鼻部、额部、颧部、口周和面颊等处，多无自觉症状。笔者根据临床观察认为黄褐斑往往与一些妇科疾病相关，如月经不调、痛经、子宫内膜异位症、子宫肌瘤等。"},{title:"拔罐治疗有哪些保健功效？",img1:"https://pic.36krcnd.com/201802/09065419/gd2gsjcg3zudbxst.jpg!heading",part1:"您想知道拔罐治疗有哪些保健功效吗？相信您看了这篇有关拔罐治疗有哪些保健功效的文章，您就了解了。拔罐疗法，是中国传统医学中的一种特色疗法，广泛运用于民间，因古时多用兽角制罐，故称为“角法”。拔罐是以罐为工具，利用燃烧、抽吸、蒸气等方法造成罐内负压，使罐吸附于体表，以产生良性刺激，拔罐具有沟通表里、疏通经络、扶正祛邪、行气活血、消肿止痛、祛风散寒、拔毒泻热、调和气血、缓解疲劳等作用，是一种以调整机体功能、防治疾病目的的外治方法。",img2:"https://img.sandingtv.com/20180103/d04323ef6574fc44688f1339df5ae974.jpg",part2:"现代医学对拔罐的作用机理进行了探讨，拔罐可以吸毒排脓，促进伤口的愈合和疾病的恢复，牵拉肌肉，提高痛阈，缓解疲劳，促进血液循环，加快新陈代谢，调节免疫功能，增强自身抵抗力，兴奋神经，调整机体机能状态。拔罐也可改善皮肤的呼吸和营养",img3:"https://images.chinatimes.com/newsphoto/2015-08-05/900/20150805003429.jpg",part3:"有利于汗腺和皮脂腺的分泌，对关节、肌腱可增强弹性和活动性；可增加肌肉的血流量，增强肌肉的工作能力和耐力，防止肌萎缩；并可加深呼吸，增强胃肠蠕动，兴奋支配腹内器官的神经，增进胃肠等脏器的分泌功能；可加速静脉血管中血液回流，调整肌肉与内脏血液流量及贮备的分布情况"}];i.detailData=e[t.id]}},methods:{}};i.default=a},c67b:function(t,i,e){"use strict";e.r(i);var a=e("9395"),n=e("3624");for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);e("9d7e");var c=e("2877"),p=Object(c["a"])(n["default"],a["a"],a["b"],!1,null,"4894455b",null);i["default"]=p.exports},e88f:function(t,i,e){var a=e("9a0a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("9534d492",a,!0,{sourceMap:!1,shadowMode:!1})}}]);