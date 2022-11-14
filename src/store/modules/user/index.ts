import mutations from './mutations';
import { createStore } from './store';
import actions from './actions';
import getters from './getters';
const state = createStore();

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions,
};
