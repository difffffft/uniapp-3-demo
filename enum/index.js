import {
	reactive
} from 'vue';

export const SHOP_ORDER_TYPE = reactive({
	//待付款
	WAIT_PAY: 0,
	//待发货
	WAIT_F_GOODS: 1,
	//待收货
	WAIT_S_GOODS: 2,
	//待评价(已完成)
	WAIT_STAR: 3,
	//已评价
	HAVE_STAR: 4,
	//已退款
	HAVE_TK: 5,
	//全部
	ALL: 6,
})
