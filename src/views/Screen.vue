<template>
    <section class="section-screen">
        <div class="lowerBanner" v-if="currentState != 'BeforeMatch'"></div>

        <ScreenTransition />
        <ScreenTesting v-if="currentState == 'Testing'" />
        <ScreenCountdown v-show="currentState == 'Countdown'" />
        <ScreenBrackets v-show="currentState == 'Brackets'" />
        <ScreenBeforeMatch v-show="currentState == 'BeforeMatch'" />
        <ScreenInGame v-show="currentState == 'InGame'" />
        <ScreenCommentators v-show="currentState == 'Commentators'" />
        <ScreenStreamEnd v-show="currentState == 'StreamEnd'" />
        <ScreenTournamentEnd v-show="currentState == 'TournamentEnd'" />
    </section>
</template>

<script>
    import { remote, ipcRenderer } from 'electron';
    import OBSWebSocket from 'obs-websocket-js';

    import UserSettings from "../modules/module.usersettings.js";

    import ScreenTransition from '@/components/Screens/ScreenTransition.vue';
    import ScreenTesting from '@/components/Screens/ScreenTesting.vue';
    import ScreenCountdown from '@/components/Screens/ScreenCountdown.vue';
    import ScreenBrackets from '@/components/Screens/ScreenBrackets.vue';
    import ScreenBeforeMatch from '@/components/Screens/ScreenBeforeMatch.vue';
    import ScreenInGame from '@/components/Screens/ScreenInGame.vue';
    import ScreenCommentators from '@/components/Screens/ScreenCommentators.vue';
    import ScreenStreamEnd from '@/components/Screens/ScreenStreamEnd.vue';
    import ScreenTournamentEnd from '@/components/Screens/ScreenTournamentEnd.vue';

    const ScreenState = Object.freeze({
        Testing: "Testing",
        Countdown: "Countdown",
        Brackets: "Brackets",
        BeforeMatch: "BeforeMatch",
        InGame: "InGame",
        Commentators: "Commentators",
        StreamEnd: "StreamEnd",
        TournamentEnd: "TournamentEnd"
    });

    export default {
        name: 'Screen',
        components: {
            ScreenTransition,
            ScreenTesting,
            ScreenCountdown,
            ScreenBrackets,
            ScreenBeforeMatch,
            ScreenInGame,
            ScreenCommentators,
            ScreenStreamEnd,
            ScreenTournamentEnd
        },
        data: function() {
            return {
                currentState: ScreenState.Testing,
                obsWebsocket: null,
                userSettings: null
            }
        },
        mounted: function() {
            console.log("[Screen] Ready.");

            this.$data.userSettings = new UserSettings();

            this.$data.obsWebsocket = new OBSWebSocket();
            this.$data.obsWebsocket.connect({
                address: 'localhost:' + this.$data.userSettings.get('obsRemotePort'),
                password: this.$data.userSettings.get('obsRemotePassword')
            });
            this.$data.obsWebsocket.on('AuthenticationSuccess', (event, data) => {
                this.$data.obsWebsocket.send('SetCurrentScene', {
                    'scene-name': 'Panel'
                });
            });

            ipcRenderer.on('change-state', (event, newState) => {
                console.log("[Screen] ChangeState -> " + newState);

                let transitionTime = 1000;
                if(this.$data.currentState == "Brackets") {
                    transitionTime = 0;
                }
                if(ScreenState[newState] == "Brackets") {
                    transitionTime = 1600;
                }

                setTimeout(() => {
                    this.$data.currentState = ScreenState[newState];
                }, 1000);

                // waiting for transition
                setTimeout(() => {
                    if(newState == 'InGame') {
                        this.$data.obsWebsocket.send('SetCurrentScene', {
                            'scene-name': 'Game'
                        });
                        this.$data.obsWebsocket.send('SetMute', {
                            'source': 'Medienquelle',
                            'mute': false
                        });
                        this.$data.obsWebsocket.send('SetMute', {
                            'source': 'Medienquelle 2',
                            'mute': true
                        });
                    } else if(newState == 'Brackets') {
                        this.$data.obsWebsocket.send('SetCurrentScene', {
                            'scene-name': 'Brackets'
                        });
                    } else {
                        this.$data.obsWebsocket.send('SetCurrentScene', {
                            'scene-name': 'Panel'
                        });
                    }
                }, transitionTime);
            });

            ipcRenderer.on('connect-obsremote', (event, newState) => {
                console.log("[Screen] Reconnecting Remote");

                if(this.$data.obsWebsocket != null) {
                    this.$data.obsWebsocket.disconnect();
                }

                console.log(newState);

                this.$data.obsWebsocket.connect({
                    address: 'localhost:' + newState.obsRemotePort,
                    password: newState.obsRemotePassword
                });
            });

            ipcRenderer.on('change-playerAudio', (event, newState) => {
                console.log(newState);
                if(this.$data.obsWebsocket != null) {
                    this.$data.obsWebsocket.send('SetMute', {
                        'source': 'Medienquelle',
                        'mute': newState.useFirstPlayerAudio
                    });
                    this.$data.obsWebsocket.send('SetMute', {
                        'source': 'Medienquelle 2',
                        'mute': !newState.useFirstPlayerAudio
                    });
                }
            });
        },
        beforeDestroy: function() {
            ipcRenderer.removeListener('change-state');
            ipcRenderer.removeListener('connect-obsremote');
            ipcRenderer.removeListener('change-playerAudio');
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
        cursor: none;
    }
    .lowerBanner {
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background: url('../assets/img/LowerBanner.png');
        background-size: cover;
        z-index: 20;
    }
</style>