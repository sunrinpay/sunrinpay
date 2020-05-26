import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";

import SimpleMode from "@/views/front/SimpleMode.vue";
import DetailsMode from "@/views/front/DetailsMode.vue";
import Payment from "@/views/front/Payment.vue";
import PaymentClear from "@/views/front/Payment-Clear.vue";
import PaymentError from "@/views/front/Payment-Error.vue";

import SimpleUserPayment from "@/views/user/SimpleUserPayment.vue";
import DetailsUserPayment from "@/views/user/DetailsUserPayment.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/front/simplemode",
		name: "simplemode",
		component: SimpleMode,
	},
	{
		path: "/front/detailsmode",
		name: "detailsmode",
		component: DetailsMode,
	},
	{
		path: "/front/payment",
		name: "payment",
		component: Payment,
	},
	{
		path: "/front/payment-clear",
		name: "payment-clear",
		component: PaymentClear,
	},
	{
		path: "/front/payment-error",
		name: "payment-error",
		component: PaymentError,
	},

	{
		path: "/user/simple-payment",
		name: "simple-payment",
		component: SimpleUserPayment,
	},
	{
		path: "/user/details-payment",
		name: "details-payment",
		component: DetailsUserPayment,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
