<template>
    <div class="controlBeforeMatch">
        <Fab v-on:click.native="transition()" title="Transition" />

        <InputGroup title="Player 1" twoInputs="true">
            <input type="number" v-model="player1Id" placeholder="SpinShare ID" />
            <!-- <input type="text" v-model="score1" placeholder="LiveScore" /> -->
            <select v-model="player1Region">
                <option value="eu3">EU3</option>
                <option value="use">USE</option>
                <option value="usw">USW</option>
                <option value="oce">OCE</option>
            </select>
            
            <input type="text" v-model="player1Key" placeholder="Streaming Key" />
        </InputGroup>

        <InputGroup title="Player 2" twoInputs="true">
            <input type="number" v-model="player2Id" placeholder="SpinShare ID" />
            <!-- <input type="text" v-model="score2" placeholder="LiveScore" /> -->
            <select v-model="player2Region">
                <option value="eu3">EU3</option>
                <option value="use">USE</option>
                <option value="usw">USW</option>
                <option value="oce">OCE</option>
            </select>
            <input type="text" v-model="player2Key" placeholder="Streaming Key" />
        </InputGroup>

        <InputGroup title="Set Length (3 or 5 or 7 or 9 or whatever)">
            <input type="number" v-model="fullSet" />
            <!-- buttons with the values 3, 5, 7 and 9 -->
            <button type="button" v-on:click="updateData(fullSet=3)">3</button>
            <button type="button" v-on:click="updateData(fullSet=5)">5</button>
            <button type="button" v-on:click="updateData(fullSet=7)">7</button>
            <button type="button" v-on:click="updateData(fullSet=9)">9</button>
        </InputGroup>

        <button v-on:click="updateData()">Update</button>
    </div>
</template>

<script>
import { remote, ipcRenderer } from 'electron';
import Fab from '@/components/Controls/Fab.vue';
import InputGroup from '@/components/Controls/InputGroup.vue';

    async function checkStreams() {
         //These need to be global, or someone smarter needs to do this nicely - let stream1Status, stream2Status, player1Region, player2Region, player1Key, player2Key;
        let player1Url = "ws://" + player1Region + ".rtmp.spinsha.re:3333/app/" + player1Key;
        let player2Url = "ws://" + player2Region + ".rtmp.spinsha.re:3333/app/" + player2Key;
        const stream1Test = OvenPlayer.create;
        const stream2Test = OvenPlayer.create;

        stream1Status = stream1Test.getState(player1Url);
        stream2Status = stream2Test.getState(player2Url);
        console.log('Player 1 Stream: ' + stream1Status);
        console.log('Player 2 Stream: ' + stream2Status);
    }

    export default {
    name: 'ControlBeforeMatch',
    components: {
        Fab,
        InputGroup
    },
    data: function() {
        return {
            player1Id: 0,
            player2Id: 0,
            currentSet: 1,
            fullSet: 0,
            player1Score: 0,
            player2Score: 0,
            player1Key: "",
            player2Key: "",
            player1Region: "",
            player2Region: "",
            score1:"",
            score2:"",
            songId: 0,
        }
    },
    mounted: function() {
        ipcRenderer.on('update-playerData', (event, newData) => {
            this.$data.player1Id = newData.player1Id;
            this.$data.player2Id = newData.player2Id;
            this.$data.player1Key = newData.player1Key;
            this.$data.player2Key = newData.player2Key;
            this.$data.player1Region = newData.player1Region;
            this.$data.player2Region = newData.player2Region;
            this.$data.score1 = newData.score1;
            this.$data.score2 = newData.score2;
            this.$data.currentSet = newData.currentSet;
            this.$data.fullSet = newData.fullSet;
            this.$data.player1Score = 0;
            this.$data.player2Score = 0;
            this.$data.songId = 0;
        });

        ipcRenderer.send('get-playerData', {});
    },
    methods: {
        transition: function() {
            ipcRenderer.send('change-state', "BeforeMatch");
        },
        updateData: function() {
            console.log("[Controls] Update PlayerData");
            //checkStreams();

            ipcRenderer.send('update-playerData', {
                player1Id: this.$data.player1Id,
                player2Id: this.$data.player2Id,
                player1Key: this.$data.player1Key,
                player2Key: this.$data.player2Key,
                player1Region: this.$data.player1Region,
                player2Region: this.$data.player2Region,
                score1: this.$data.score1,
                score2: this.$data.score2,
                currentSet: this.$data.currentSet,
                fullSet: this.$data.fullSet,
                player1Score: 0,
                player2Score: 0,
                songId: 0,
            });
        },
    }
}
</script>

<style scoped lang="less">
    .controlBeforeMatch {
        padding: 5px 20px;
        & select {
            color: #fff;
            background: rgba(255,255,255,0.15);
            border: 0;
            border-radius: 4px;
            & option {
                color: #000;
            }
        }
    }
</style>