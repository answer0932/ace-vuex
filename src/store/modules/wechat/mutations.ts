import { GET_DATA } from './constant';
import { wechatState } from './store';

const mutations = {
	[GET_DATA](state: wechatState, payload: boolean): void {
		console.log('[ mutations执行成功 ]', payload);
		state.loading = payload;
	},
};
export default mutations;
