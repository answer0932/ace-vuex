import { useStore } from 'vuex';
import { State } from '../store';
import { Getters } from '../store/utils';
interface useVuexStore {
  state: State;
  getters: Getters;
  dispatch: any;
}
const useVuexStore = (): useVuexStore => {
  const store = useStore<State>();
  const { state, getters, dispatch } = store;
  //   return store;
  return { state, getters, dispatch };
};
export { useVuexStore };
export default useVuexStore;
