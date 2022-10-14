const useDialog = ({
	title,
	confirm
}) => {
	uni.showModal({
		title: `${title}提示`,
		content: `确定${title}吗?`,
		confirmColor: '#F00',
		success: res => {
			if (res.confirm) {
				if (confirm && (typeof confirm === "function")) {
					confirm()
				}
			}
		}
	});
}

export default useDialog
