import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        /**
         * 是否需要强制登录
         */
        forcedLogin: false,
        hasLogin: false,
        userName: "",
				token:'',
		//健康数据
		itemName:null,
		itemNumber:null,
		itemImg:null,
		itemUnit:null,
		steps:0,
    },
    mutations: {
      login(state, userName) {
          state.userName = userName || '新用户';
          state.hasLogin = true;
      },
      logout(state) {
          state.userName = "";
          state.hasLogin = false;
      },
			changeItemName(state,props){
				var timer;
				state.itemName=props.itemName;
				state.itemNumber=props.itemNumber;
				state.itemImg=props.itemImg;
				state.itemUnit=props.itemUnit;
				if(props.itemName == "步行" ){
					timer =setInterval(function(){
						state.itemNumber = state.steps;
					},1000);
				}else{
					clearInterval(timer);
				}
			},
			changeStepNumber(state,steps){
				state.steps = steps;
			},
			saveToken(state,props){
				state.token = props.token;
			}
    }
})

export default store
