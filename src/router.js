import { createRouter, createWebHistory } from "vue-router";

import NoticePage from './components/Pages/NoticePage.vue';
import InfoPage from './components/Pages/InfoPage.vue';
import NoticeForm from './components/Pages/NoticeForm.vue';
import Login from './components/Pages/LoginPage.vue';

console.log("In Router");
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", redirect: "/notices" },
		{path: "/login", component: Login},
		{ path: "/notices", component: NoticePage },
		{ path: "/info", component: InfoPage },
		{ path: "/addNotice", component: NoticeForm},
	],
});

export default router;