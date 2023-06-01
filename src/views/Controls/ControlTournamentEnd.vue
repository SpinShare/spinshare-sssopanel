<template>
    <div class="controlTournamentEnd">
        <Fab v-on:click.native="transition()" title="Transition" />
        <!--DISPLAY SELECTOR
    <InputGroup title="Qualifying Players | Single Winner | Both Winners">

        <select v-model="displaySel" @change="onChange($event)">
            <option value="1">TODAYS QUALIFIERS</option>
            <option value="2">ONE WINNER</option>
            <option value="3">CHALLENGER & ELITE WINNERS</option>
        </select>
    </InputGroup>
    -->
        <!--INPUTS FOR QUALIFIERS-->
        <InputGroup title="Elite Qualifiers" twoInputs="true" v-show="qualiShow">
            <input type="number" v-model="elite1Id" placeholder="1st Elite Qualifier" />
            <input type="number" v-model="elite2Id" placeholder="2nd Elite Qualifier" />
        </InputGroup>
        <InputGroup title="Challenger Qualifiers" twoInputs="true" v-show="qualiShow">
            <input type="number" v-model="chall1Id" placeholder="1st Chall Qualifier" />
            <input type="number" v-model="chall2Id" placeholder="2nd Chall Qualifier" />
            <button v-on:click="updateData()">Update</button>
        </InputGroup>
        <!--END OF INPUTS FOR QUALIFIERS-->
        <!--INPUTS FOR SINGLE WINNER-->
        <InputGroup title="Winner User ID (NickAzn=65)" v-show="oneShow">
            <input type="number" v-model="winnerUserID" />
        </InputGroup>
        <InputGroup title="Bracket" v-show="oneShow">
            <select v-model="chalEliteSelect">
                <option value="Challenger">CHALLENGER</option>
                <option value="Elite">ELITE</option>
            </select>
            <button v-on:click="updateData()">Update</button>
        </InputGroup>
        <!--END OF SINGLE WINNER-->

    </div>
</template>

<script>
import { remote, ipcRenderer } from 'electron';
import { watchEffect } from 'vue';
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
            qualiShow: false,
            oneShow: true,
            twoShow: false,
            winnerUserID: 0,
            chalEliteSelect: "Challenger",
        }
    },
    methods: {
        transition: () => {
            ipcRenderer.send('change-state', "TournamentEnd");
        },

        /*onChange(event) {
            If(displaySel == "1"){
                this.qualiShow = true;
                this.oneShow = false;
                this.twoShow = false;
            } Elseif(displaySel == "2") {
                this.qualiShow = false;
                this.oneShow = true;
                this.twoShow = false;
            } Else{
                this.qualiShow = false;
                this.oneShow = false;
                this.twoShow = true;
            }

            console.log("CONTROLS UPDATED - TOURNAMENT END PAGE");
        },*/

        updateData: function() {
            console.log("[Controls] Update EndOfTournamentData");
            ipcRenderer.send('update-endoftournamentdata', {
                winnerUserID: this.$data.winnerUserID,
                chalEliteSelect: this.$data.chalEliteSelect
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
