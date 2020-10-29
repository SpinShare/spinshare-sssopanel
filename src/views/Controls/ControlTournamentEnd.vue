<template>
    <div class="controlTournamentEnd">
        <Fab v-on:click.native="transition()" title="Transition" />

        <InputGroup title="Winner User ID (NickAzn=65)">
            <input type="number" v-model="winnerUserID" />
        </InputGroup>

        <button v-on:click="updateData()">Update</button>
    </div>
</template>

<script>
import { remote, ipcRenderer } from 'electron';

import Fab from '@/components/Controls/Fab.vue';
import InputGroup from '@/components/Controls/InputGroup.vue';

export default {
    name: 'ControlTournamentEnd',
    components: {
        Fab,
        InputGroup
    },
    data: function() {
        return {
            winnerUserID: 0,
        }
    },
    methods: {
        transition: () => {
            ipcRenderer.send('change-state', "TournamentEnd");
        },
        updateData: function() {
            console.log("[Controls] Update EndOfTournamentData");
            ipcRenderer.send('update-endoftournamentdata', {
                winnerUserID: this.$data.winnerUserID
            });
        }
    }
}
</script>

<style scoped lang="less">
    .controlTournamentEnd {
        padding: 5px 20px;
    }
</style>
