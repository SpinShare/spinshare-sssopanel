<template>
    <section class="section-controls">
        <!-- State -->
        <select v-model="currentState">
            <option value="CurrentlyPlaying">CurrentlyPlaying</option>
            <option value="BetweenSongs">BetweenSongs</option>
            <option value="BetweenRounds">BetweenRounds</option>
        </select>
        <button v-on:click="changeState()">ChangeState</button>

        <hr/>

        <!-- Song -->
        SongID: <input v-model="songId" />
        <button v-on:click="changeSong()">ChangeSong</button>

        <hr/>

        <!-- Players -->
        Player1ID: <input v-model="player1ID" /><br />
        Player2ID: <input v-model="player2ID" /><br />
        <button v-on:click="changePlayers()">ChangePlayers</button>

        <!-- Score -->
    </section>
</template>

<script>
    import { remote, ipcRenderer } from 'electron';

    const ScreenState = Object.freeze({ CurrentlyPlaying: "CurrentlyPlaying", BetweenSongs: "BetweenSongs", BetweenRounds: "BetweenRounds"});

    export default {
        name: 'Controls',
        data: function() {
            return {
                currentState: ScreenState.CurrentlyPlaying,
                player1ID: 0,
                player2ID: 0,
                player1Score: 0,
                player2Score: 0,
                songId: 0,
            }
        },
        mounted: function() {
            /* ipcRenderer.on('clear-video', () => {
                this.$data.youtubeID = null;
            }); */
        },
        methods: {
            changeState: function() {
                console.log("[Controls] ChangeState -> " + this.$data.currentState);
                ipcRenderer.send('change-state', this.$data.currentState);
            },
            changeSong: function() {
                console.log("[Controls] ChangeSong -> " + this.$data.songId);
                ipcRenderer.send('change-song', this.$data.songId);
            }
        }
    }
</script>

<style scoped lang="less">
    .section-controls {
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background: grey;
        padding: 50px;
    }
</style>