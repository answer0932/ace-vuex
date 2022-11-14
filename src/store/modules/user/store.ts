export const createStore = () => {
	const store = {
		loading: true,
	};
	return store;
};

//类型
export type userState = ReturnType<typeof createStore>;
