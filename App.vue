<script>
	import {mapMutations} from 'vuex';
	var _this;
export default {
	methods:{
		...mapMutations(['changeStepNumber'])
	},
	onLaunch: function() {
		_this = this;
		console.log('App Launch');

		setTimeout(() => {
			uni.setTabBarBadge({
				index: 1,
				text: '31'
			});
			uni.showTabBarRedDot({
				index: 3
			});
		}, 1000);
		// 注册计步器
		var step = uni.requireNativePlugin('DC-StepCounter');
		// 注册globalEvent
		var globalEvent = uni.requireNativePlugin('globalEvent');
		// 监听globalEvent事件 StepCounter_Ready 在ready后调用计步器相关API
		globalEvent.addEventListener("StepCounter_Ready", function (e) {
			setInterval(function(){
				step.getCurrentTimeSportStep(function(n){
						_this.changeStepNumber(n);
				})
			},2000);
		});
		//调用初始化 先注册StepCounter_Ready事件 再调用initialize初始化 防止StepCounter_Ready事件丢失
		step.initialize();
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
	@import "./common/esofont.css";
	/*每个页面公共css */
	page {
		min-height: 100%;
		display: flex;
	}

	/* #ifdef MP-BAIDU */
	page {
		width: 100%;
		height: 100%;
		display: block;
	}

	swan-template {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* 原生组件模式下需要注意组件外部样式 */
	custom-component {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* #endif */

	/* #ifdef MP-ALIPAY */
	page {
		min-height: 100vh;
	}

	/* #endif */

	/* 原生组件模式下需要注意组件外部样式 */
	m-input {
		width: 100%;
		min-height: 100%;
		display: flex;
		margin-top: 20upx;
	}

	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		background: #F8F8F8;
	}

	.input-group {
		background-color: #ffffff;
		margin-top: 40upx;
	}

	.input-group::before {
		position: absolute;
		right: 0;
		top: 0;
		left: 0;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.input-group::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.input-row {
		display: flex;
		flex-direction: row;
		position: relative;
	}

	.input-row .title {
		width: 20%;
		height: 50upx;
		min-height: 50upx;
		padding: 15upx 0;
		padding-left: 30upx;
		line-height: 50upx;
	}

	.input-row.border::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 15upx;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.btn-row {
		margin-top: 50upx;
		padding: 20upx;
	}

	button.primary {
		background-color:#40A9FF;
	}
	button.click{
		background: #40A9FF;
	}
</style>

