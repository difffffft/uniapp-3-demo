import {
	ref,
	reactive,
	watch
} from 'vue';

import { onLoad } from '@dcloudio/uni-app';

export let wxCode = ref('')
export let wxLoginLoading = ref(false)

const login = () => {
	uni.login({
		provider: 'weixin',
		success: ({
			code
		}) => {
			wxCode.value = code
		},
		fail: err => {
			uni.$u.toast('uni.login error');
		}
	});
}


//初始化
export const useWxPhoneLoginInit = () => {
	onLoad(() => {
		login()
	})
}

// 点击时使用
export const useWxPhoneLogin = ({ e, success, fail }) => {
	wxLoginLoading.value = true
	//无权限
	if (e.detail.errMsg === 'getPhoneNumber:fail no permission') {
		uni.$u.toast('无登录权限');
		wxLoginLoading.value = false
		return;
	}
	//拒绝
	if (e.detail.errMsg === 'getPhoneNumber:fail user deny') {
		uni.$u.toast('用户已拒绝,无法登录');
		wxLoginLoading.value = false
		return;
	}
	//登录
	if (e.detail.errMsg === 'getPhoneNumber:ok') {
		// 检查登录态是否过期
		uni.checkSession({
			success: res => {
				uni.getUserInfo({
					provider: 'weixin',
					success: ({
						userInfo
					}) => {
						let obj = {
							...userInfo,
							iv: e.detail.iv,
							encryptedData: e.detail.encryptedData,
							code: wxCode.value
						};
						if (success && (typeof success == "function")) {
							success(obj)
							wxLoginLoading.value = false
						} else {
							fail()
							wxLoginLoading.value = false
						}
					},
					fail: () => {
						wxLoginLoading.value = false
						uni.$u.toast('头像昵称获取失败');
						fail()
					}
				});
			},
			fail: err => {
				login()
			}
		})
	}
}
