<template>
	<view class="login">
		<view class="tip">Welcome</view>
		<tui-input placeholder="请输入账号" clearable label="账号" v-model="accountRef.account"></tui-input>
		<tui-input placeholder="请输入密码" clearable label="密码" password v-model="accountRef.pwd"></tui-input>
		<view class="login-btn">
			<tui-button @click="loginAction">登录</tui-button>
		</view>
	</view>
</template>
<script setup lang="ts">
	import {
		ref
	} from "vue";

	const accountRef = ref({
		account: "admin",
		pwd: "123456",
	});

	async function loginAction() {
		uni.switchTab({
			url: "/pages/tabBar/home/home",
		});
	}
</script>
<style lang="scss" scoped>
	page {
		display: flex;
		justify-content: center;
		height: 100%;
		background-color: lightgrey;
		flex-direction: column;

		.login {
			display: flex;
			margin-right: 10px;
			margin-left: 10px;
			flex-direction: column;
			background-color: $main-bg-color;
			
			.tip {
				margin-bottom: 50px;
				color: white;
				font-size: 30px;
				text-align: center;
			}

			.login-btn {
				margin-top: 20px;
			}
		}
	}
</style>
