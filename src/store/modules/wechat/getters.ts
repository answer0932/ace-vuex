import { wechatState } from './store';

const moduleGetters = {
	isTest: (state: wechatState): string => {
		return `🐉${state.loading}`;
	},
};

export default moduleGetters;
