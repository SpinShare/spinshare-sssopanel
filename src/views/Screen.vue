<template>
    <section class="section-screen">
        <div class="lowerBanner"></div>

        <ScreenTransition />
        <ScreenTesting v-if="currentState == 'Testing'" />
        <ScreenBackgroundVideo v-if="currentState != 'InGame'" />
        <ScreenCountdown v-show="currentState == 'Countdown'" />
        <ScreenBrackets v-if="currentState == 'Brackets'" />
        <ScreenBeforeSong v-if="currentState == 'BeforeSong'" />
        <ScreenBeforeMatch v-if="currentState == 'BeforeMatch'" />
        <ScreenInGame v-if="currentState == 'InGame'" />
        <ScreenCommentators v-if="currentState == 'Commentators'" />
    </section>
</template>

<script>
    import { remote, ipcRenderer } from 'electron';
    import OBSWebSocket from 'obs-websocket-js';

    import ScreenTransition from '@/components/Screens/ScreenTransition.vue';
    import ScreenBackgroundVideo from '@/components/Screens/ScreenBackgroundVideo.vue';
    import ScreenTesting from '@/components/Screens/ScreenTesting.vue';
    import ScreenCountdown from '@/components/Screens/ScreenCountdown.vue';
    import ScreenBrackets from '@/components/Screens/ScreenBrackets.vue';
    import ScreenBeforeSong from '@/components/Screens/ScreenBeforeSong.vue';
    import ScreenBeforeMatch from '@/components/Screens/ScreenBeforeMatch.vue';
    import ScreenInGame from '@/components/Screens/ScreenInGame.vue';
    import ScreenCommentators from '@/components/Screens/ScreenCommentators.vue';

    const ScreenState = Object.freeze({
        Testing: "Testing",
        Countdown: "Countdown",
        Brackets: "Brackets",
        BeforeMatch: "BeforeMatch",
        BeforeSong: "BeforeSong",
        InGame: "InGame",
        Commentators: "Commentators",
        StreamEnd: "StreamEnd",
        TournamentEnd: "TournamentEnd"
    });

    export default {
        name: 'Screen',
        components: {
            ScreenTransition,
            ScreenBackgroundVideo,
            ScreenTesting,
            ScreenCountdown,
            ScreenBrackets,
            ScreenBeforeSong,
            ScreenBeforeMatch,
            ScreenInGame,
            ScreenCommentators,
        },
        data: function() {
            return {
                currentState: ScreenState.Testing,
                obsWebsocket: null,
            }
        },
        mounted: function() {
            console.log("[Screen] Ready.");

            this.obsWebsocket = new OBSWebSocket();
            this.obsWebsocket.connect({ adress: 'localhost:4444', password: 'testtest' });

            ipcRenderer.on('change-state', (event, newState) => {
                console.log("[Screen] ChangeState -> " + newState);

                // waiting for transition
                setTimeout(() => {
                    this.$data.currentState = ScreenState[newState];

                    if(newState == 'InGame') {
                        this.obsWebsocket.send('SetCurrentScene', {
                            'scene-name': 'Game'
                        });
                    } else if(newState == 'Brackets') {
                        this.obsWebsocket.send('SetCurrentScene', {
                            'scene-name': 'Brackets'
                        });
                    } else {
                        this.obsWebsocket.send('SetCurrentScene', {
                            'scene-name': 'Panel'
                        });
                    }
                }, 1000);
            });
        },
        beforeDestroy: function() {
            ipcRenderer.removeListener('change-state');
        },
    }
</script>

<style scoped lang="less">
    .section-screen {
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
    }
    .lowerBanner {
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background: url('../assets/img/LowerBanner.png');
        background-size: cover;
        z-index: 10;
    }
</style>