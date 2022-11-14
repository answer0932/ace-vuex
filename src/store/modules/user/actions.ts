import { GET_DATA } from './constant';
import { ActionContext } from 'vuex';
import { userState } from './store';

export default {
	[GET_DATA]({ commit }: ActionContext<userState, unknown>) {
		console.log('[ action执行成功 ]');
		setTimeout(function () {
			const payload = false;
			commit(GET_DATA, payload);
		}, 2000);
	},
};
