<script setup>
	import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
	import useUpdateManager from '@/hooks/useUpdateManager'
	onLaunch(() => {
		useUpdateManager()
	})
	onShow(() => {

	})
	onHide(() => {

	})
</script>

<style lang="scss">
	//uView
	@import 'uni_modules/uview-plus/index.scss';
	//项目
	@import 'style/app.scss';
	//字体
	@import 'style/font.scss';
</style>
