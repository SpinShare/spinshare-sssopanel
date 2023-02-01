<template>
    <div class="ControlChallEliteEnd">
        <Fab v-on:click.native="transition()" title="Transition" />

        <InputGroup title="Elite User ID (snaphap=756)">
            <input type="number" v-model="eliteUserID" />
        </InputGroup>

        <InputGroup title="Challenger User ID (GaviGuy=624)">
            <input type="number" v-model="challUserID" />
        </InputGroup>
        <button v-on:click="updateData()">Update</button>
    </div>
</template>

<script>
import { remote, ipcRenderer } from 'electron';

import Fab from '@/components/Controls/Fab.vue';
import InputGroup from '@/components/Controls/InputGroup.vue';

export default {
    name: 'ControlChallEliteEnd',
    components: {
        Fab,
        InputGroup
    },
    data: function() {
        return {
            eliteUserID: 0,
            challUserID: 0,
        }
    },
    methods: {
        transition: () => {
            ipcRenderer.send('change-state', "ChallEliteEnd");
        },
        updateData: function() {
            console.log("[Controls] Update SSSO-END-Data");
            ipcRenderer.send('update-ssso-end-data', {
                eliteUserID: this.$data.eliteUserID,
                challUserID: this.$data.challUserID
            });
        }
    }
}
</script>

<style scoped lang="less">
    .ControlChallEliteEnd {
        padding: 5px 20px;
    }
</style>
