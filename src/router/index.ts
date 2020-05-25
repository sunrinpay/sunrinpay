import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import SimpleMode from "@/views/front/SimpleMode.vue";
import DetailsMode from "@/views/front/DetailsMode.vue";
import Payment from "@/views/front/Payment.vue";
import PaymentClear from "@/views/front/Payment-Clear.vue";
import PaymentError from "@/views/front/Payment-Error.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/simplemode",
		name: "simplemode",
		component: SimpleMode,
	},
	{
		path: "/detailsmode",
		name: "detailsmode",
		component: DetailsMode,
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
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
