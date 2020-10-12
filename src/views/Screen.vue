<template>
    <section class="section-screen">
        <div class="debug">
            State: {{ currentState }}<br /><br />
            P1: {{ player1Data.id }}, {{ player1Data.username }} [{{ player1Score }}]<br />
            P2: {{ player2Data.id }}, {{ player2Data.id }} [{{ player2Score }}]<br /><br />
            Song:<br />
            Title: {{ songData.title }} <span v-if="songData.isExplicit">(explicit)</span><br />
            Artist: {{ songData.artist }}<br />
            Charter: {{ songData.charter }}<br />
        </div>

        <div class="lowerBanner"></div>

        <ScreenTransition />
        <ScreenTesting v-show="currentState == 'Testing'" />
        <ScreenBackgroundVideo v-show="currentState != 'InGame'" />
        <ScreenCountdown v-show="currentState == 'Countdown'" />
        <ScreenBeforeSong v-show="currentState == 'BeforeSong'" />
        <ScreenBeforeMatch v-show="currentState == 'BeforeMatch'" />
        <ScreenInGame v-show="currentState == 'InGame'" />
        <ScreenCommentators v-show="currentState == 'Commentators'" />
    </section>
</template>

<script>
    import { remote, ipcRenderer } from 'electron';
    import SSAPI from '../modules/module.api.js';

    import ScreenTransition from '@/components/Screens/ScreenTransition.vue';
    import ScreenBackgroundVideo from '@/components/Screens/ScreenBackgroundVideo.vue';
    import ScreenTesting from '@/components/Screens/ScreenTesting.vue';
    import ScreenCountdown from '@/components/Screens/ScreenCountdown.vue';
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
            ScreenBeforeSong,
            ScreenBeforeMatch,
            ScreenInGame,
            ScreenCommentators,
        },
        data: function() {
            return {
                currentState: ScreenState.Testing,
                songData: {},
                player1Data: {},
                player2Data: {},
                player1Score: 0,
                player2Score: 0,
            }
        },
        mounted: function() {
            console.log("[Screen] Ready.");

            ipcRenderer.on('change-state', (event, newState) => {
                console.log("[Screen] ChangeState -> " + newState);

                // waiting for transition
                setTimeout(() => {
                    this.$data.currentState = ScreenState[newState];
                }, 1000);
            });

            ipcRenderer.on('change-song', (event, songID) => {
                console.log("[Screen] ChangeSong -> " + songID);

                let ssapi = new SSAPI();
                ssapi.getSongDetail(songID).then((data) => {
                    this.$data.songData = data.data;
                    console.log(data.data);
                });
            });
        },
        beforeDestroy: function() {
            ipcRenderer.removeListener('change-state');
            ipcRenderer.removeListener('change-song');
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
    .debug {
        //display: none;
        position: absolute;
        top: 25px;
        right: 25px;
        width: 300px;
        padding: 20px;
        border-radius: 10px;
        background: rgba(0,0,0,0.6);
        transition: 0.5s ease all;
        z-index: 999;

        &:hover {
            opacity: 0.15;
        }
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