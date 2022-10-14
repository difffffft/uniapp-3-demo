<template>
	<view class="content">
		<button type="primary" open-type="getPhoneNumber" @getphonenumber="handleLogin">点击登录</button>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive,
		watch
	} from 'vue';
	import { wxCode, wxLoginLoading, useWxPhoneLogin, useWxPhoneLoginInit } from '@/hooks/useWxPhoneLogin'
	useWxPhoneLoginInit()
	const handleLogin = (e) => {
		useWxPhoneLogin({
			e,
			success: (args) => {
				console.log("登录成功", args);
			},
			fail: () => {
				console.log("登录失败");
			}
		})
	}
</script>

<style lang="scss" scoped>
	::v-deep .u-button {
		margin: 0;
		padding: 0;
		background-color: aqua !important;
	}
</style>
