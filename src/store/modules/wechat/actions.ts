import { GET_DATA } from './constant';
import { ActionContext } from 'vuex';
import { wechatState } from './store';

export default {
	[GET_DATA]({ commit }: ActionContext<wechatState, unknown>) {
		console.log('[ action执行成功 ]');
		setTimeout(function () {
			const payload = false;
			commit(GET_DATA, payload);
		}, 2000);
	},
};
