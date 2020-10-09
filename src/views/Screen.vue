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

        <ScreenCurrentlyPlaying v-if="currentState == 'CurrentlyPlaying'" />
        <ScreenBetweenSongs v-if="currentState == 'BetweenSongs'" />
        <ScreenBetweenRounds v-if="currentState == 'BetweenRounds'" />
        <ScreenTransition />
    </section>
</template>

<script>
    import { remote, ipcRenderer } from 'electron';
    import SSAPI from '../modules/module.api.js';

    import ScreenTransition from '@/components/ScreenTransition.vue';
    import ScreenCurrentlyPlaying from '@/components/ScreenCurrentlyPlaying.vue';
    import ScreenBetweenSongs from '@/components/ScreenBetweenSongs.vue';
    import ScreenBetweenRounds from '@/components/ScreenBetweenRounds.vue';

    const ScreenState = Object.freeze({ CurrentlyPlaying: "CurrentlyPlaying", BetweenSongs: "BetweenSongs", BetweenRounds: "BetweenRounds"});

    export default {
        name: 'Screen',
        components: {
            ScreenTransition,
            ScreenCurrentlyPlaying,
            ScreenBetweenSongs,
            ScreenBetweenRounds
        },
        data: function() {
            return {
                currentState: ScreenState.CurrentlyPlaying,
                songData: {},
                player1Data: {},
                player2Data: {},
                player1Score: 0,
                player2Score: 0,
            }
        },
        mounted: function() {
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
        position: absolute;
        top: 25px;
        right: 25px;
        width: 300px;
        padding: 20px;
        border-radius: 10px;
        background: rgba(0,0,0,0.6);
        transition: 0.5s ease all;
        z-index: 100;

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