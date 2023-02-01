import Vue from 'vue';
import VueRouter from 'vue-router';

import ViewScreen from '../views/Screen.vue';

import ViewControls from '../views/Controls.vue';
import ViewControlMenu from '../views/Controls/ControlMenu.vue';
import ViewControlSettings from '../views/Controls/ControlSettings.vue';
import ViewControlTesting from '../views/Controls/ControlTesting.vue';
import ViewControlCountdown from '../views/Controls/ControlCountdown.vue';
import ViewControlBrackets from '../views/Controls/ControlBrackets.vue';
import ViewControlBeforeMatch from '../views/Controls/ControlBeforeMatch.vue';
import ViewControlInGame from '../views/Controls/ControlInGame.vue';
import ViewControlCommentators2 from '../views/Controls/ControlCommentators2.vue';
import ViewControlCommentators4 from '../views/Controls/ControlCommentators4.vue';
import ViewControlStreamEnd from '../views/Controls/ControlStreamEnd.vue';
import ViewControlTournamentEnd from '../views/Controls/ControlTournamentEnd.vue';
import ViewControlChallEliteEnd from '../views/Controls/ControlChallEliteEnd.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'Screen',
    meta: { title: "SpinShare LivePanel Screen" },
    component: ViewScreen
},{
    path: '/controls',
    name: 'Controls',
    component: ViewControls,
    children: [
        {
            path: '/',
            name: 'ControlMenu',
            meta: { title: "SpinShare LivePanel Controls" },
            component: ViewControlMenu
        },
        {
            path: '/settings',
            name: 'ControlSettings',
            meta: { title: "SpinShare LivePanel Controls" },
            component: ViewControlSettings
        },
        {
            path: '/testing',
            name: 'ControlTesting',
            meta: { title: "SpinShare LivePanel Controls" },
            component: ViewControlTesting
        },
        {
            path: '/countdown',
            name: 'ControlCountdown',
            meta: { title: "SpinShare LivePanel Controls" },
            component: ViewControlCountdown
        },
        {
            path: '/brackets',
            name: 'ControlBrackets',
            meta: { title: "SpinShare LivePanel Controls" },
            component: ViewControlBrackets
        },
        {
            path: '/beforematch',
            name: 'ControlBeforeMatch',
            meta: { title: "SpinShare LivePanel Controls" },
            component: ViewControlBeforeMatch
        },
        {
            path: '/ingame',
            name: 'ControlInGame',
            meta: { title: "SpinShare LivePanel Controls" },
            component: ViewControlInGame
        },
        {
            path: '/commentators2',
            name: 'ControlCommentators2',
            meta: { title: "SpinShare LivePanel Controls" },
            component: ViewControlCommentators2
        },
        {
            path: '/commentators4',
            name: 'ControlCommentators4',
            meta: { title: "SpinShare LivePanel Controls" },
            component: ViewControlCommentators4
        },
        {
            path: '/streamend',
            name: 'ControlStreamEnd',
            meta: { title: "SpinShare LivePanel Controls" },
            component: ViewControlStreamEnd
        },
        {
            path: '/tournamentend',
            name: 'ControlTournamentEnd',
            meta: { title: "SpinShare LivePanel Controls" },
            component: ViewControlTournamentEnd
        },
        {
            path: '/challeliteend',
            name: 'ControlChallEliteEnd',
            meta: { title: "SpinShare LivePanel Controls" },
            component: ViewControlChallEliteEnd
        },
    ]
}];

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next()
});

export default router;
