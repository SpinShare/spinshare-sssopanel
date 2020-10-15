<template>
    <div class="controlInGame">
        <Fab v-on:click.native="transition()" title="Transition" />

        <div class="score-split">
            <InputGroup title="Player 1 Score">
                <input type="number" v-model="player1Score" />
            </InputGroup>

            <InputGroup title="Player 2 Score">
                <input type="number" v-model="player2Score" />
            </InputGroup>
        </div>

        <InputGroup title="Current Set">
            <input type="number" v-model="currentSet" />
        </InputGroup>

        <InputGroup title="Song ID">
            <input type="number" v-model="songId" />
        </InputGroup>

        <button v-on:click="updateData()">Update</button>
    </div>
</template>

<script>
    import { remote, ipcRenderer } from 'electron';

    import Fab from '@/components/Controls/Fab.vue';
    import InputGroup from '@/components/Controls/InputGroup.vue';

    export default {
        name: 'ControlInGame',
        components: {
            Fab,
            InputGroup,
        },
        data: function() {
            return {
                player1Id: 0,
                player2Id: 0,
                currentSet: 0,
                fullSet: 3,
                player1Score: 0,
                player2Score: 0,
                songId: 0,
            }
        },
        mounted: function() {
            ipcRenderer.on('update-playerData', (event, newData) => {
                this.$data.player1Id = newData.player1Id;
                this.$data.player2Id = newData.player2Id;
                this.$data.currentSet = newData.currentSet;
                this.$data.fullSet = newData.fullSet;
                this.$data.player1Score = newData.player1Score;
                this.$data.player2Score = newData.player2Score;
                this.$data.songId = newData.songId;
            });
            ipcRenderer.send('get-playerData', {});
        },
        methods: {
            transition: () => {
                ipcRenderer.send('change-state', "InGame");
            },
            updateData: function() {
                console.log("[Controls] Update PlayerData");
                ipcRenderer.send('update-playerData', {
                    player1Id: this.$data.player1Id,
                    player2Id: this.$data.player2Id,
                    currentSet: this.$data.currentSet,
                    fullSet: this.$data.fullSet,
                    player1Score: this.$data.player1Score,
                    player2Score: this.$data.player2Score,
                    songId: this.$data.songId,
                });
            },
        }
    }
</script>

<style scoped lang="less">
    .controlInGame {
        padding: 20px;
    }
</style>
