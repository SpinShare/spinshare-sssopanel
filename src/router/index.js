import Vue from 'vue';
import VueRouter from 'vue-router';

import ViewScreen from '../views/Screen.vue';

import ViewControls from '../views/Controls.vue';
import ViewControlMenu from '../views/Controls/ControlMenu.vue';
import ViewControlSettings from '../views/Controls/ControlSettings.vue';
import ViewControlTesting from '../views/Controls/ControlTesting.vue';
import ViewControlCountdown from '../views/Controls/ControlCountdown.vue';
import ViewControlInGame from '../views/Controls/ControlInGame.vue';
import ViewControlCommentators from '../views/Controls/ControlCommentators.vue';
import ViewControlStreamEnd from '../views/Controls/ControlStreamEnd.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'Screen',
    component: ViewScreen
},{
    path: '/controls',
    name: 'Controls',
    component: ViewControls,
    children: [
        {
            path: '/',
            name: 'ControlMenu',
            component: ViewControlMenu
        },
        {
            path: '/settings',
            name: 'ControlSettings',
            component: ViewControlSettings
        },
        {
            path: '/testing',
            name: 'ControlTesting',
            component: ViewControlTesting
        },
        {
            path: '/countdown',
            name: 'ControlCountdown',
            component: ViewControlCountdown
        },
        {
            path: '/ingame',
            name: 'ControlInGame',
            component: ViewControlInGame
        },
        {
            path: '/commentators',
            name: 'ControlCommentators',
            component: ViewControlCommentators
        },
        {
            path: '/streamend',
            name: 'ControlStreamEnd',
            component: ViewControlStreamEnd
        },
    ]
}];

const router = new VueRouter({
    routes
});

export default router;
