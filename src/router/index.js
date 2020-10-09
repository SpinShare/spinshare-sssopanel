import Vue from 'vue';
import VueRouter from 'vue-router';
import ViewScreen from '../views/Screen.vue';
import ViewControls from '../views/Controls.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'Screen',
    component: ViewScreen
},{
    path: '/controls',
    name: 'Controls',
    component: ViewControls
}];

const router = new VueRouter({
    routes
});

export default router;
