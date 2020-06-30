import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import VueAnalytics from "vue-analytics";

import Home from "@/views/Home.vue";
import PrivacyPolicy from "@/views/PrivacyPolicy.vue";

// Customer
import SimpleCheckout from "@/views/SimpleCheckout.vue";
import Checkout from "@/views/Checkout.vue";
import Payment from "@/views/Payment.vue";
import PaymentClear from "@/views/Payment-Clear.vue";
import PaymentError from "@/views/Payment-Error.vue";
import SimpleUserPayment from "@/views/SimpleUserPayment.vue";
import DetailsUserPayment from "@/views/DetailsUserPayment.vue";
// import Main from "@/views/user/Main.vue";

// Pos
import PoS from "@/views/pos/PoS.vue";
import SimpleOrder from "@/views/pos/SimpleOrder.vue";
import Order from "@/views/pos/Order.vue";
import StockManagement from "@/views/pos/StockManagement.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/privacy",
		name: "privacypolicy",
		component: PrivacyPolicy,
	},

	// Customer
	{
		path: "/simplecheckout",
		name: "simplecheckout",
		component: SimpleCheckout,
	},
	{
		path: "/checkout",
		name: "checkout",
		component: Checkout,
	},
	{
		path: "/payment",
		name: "payment",
		component: Payment,
	},
	{
		path: "/payment-clear",
		name: "payment-clear",
		component: PaymentClear,
	},
	{
		path: "/payment-error",
		name: "payment-error",
		component: PaymentError,
	},
	{
		path: "/simple-payment",
		name: "simple-payment",
		component: SimpleUserPayment,
	},
	{
		path: "/details-payment",
		name: "details-payment",
		component: DetailsUserPayment,
	},

	// PoS
	{
		path: "/pos",
		name: "pos",
		component: PoS,
	},
	{
		path: "/pos/simpleorder",
		name: "simpleorder",
		component: SimpleOrder,
	},
	{
		path: "/pos/order",
		name: "order",
		component: Order,
	},
	{
		path: "/pos/stock-management",
		name: "StockManagement",
		component: StockManagement,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

Vue.use(VueAnalytics, {
	id: "232816031",
	router,
});

export default router;
