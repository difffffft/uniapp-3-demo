import {
	defineStore
} from 'pinia';

export const useUserStore = defineStore('user', {
	state: () => {
		return {
			uid: '',
			token: '',
		};
	},
	actions: {
		login() {
			this.token = "123"
		},
	},
});
