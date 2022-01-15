<template>
  <div class="controlBrackets">
    <Fab v-on:click.native="transition()" title="Transition" />

    <!-- <InputGroup title="Toornament Event ID">
      <input type="number" v-model="toornamentEventId" />
    </InputGroup>

    <InputGroup title="Toornament Stage ID">
      <input type="number" v-model="toornamentStageId" />
    </InputGroup>
    <InputGroup title="Top Left Text">
      <input type="string" v-model="topLeftText" placeholder="GROUP STAGE" />
    </InputGroup>
-->
    <InputGroup title="AAAAAAAAAAAAAAAAAAAAAAAAA 1" twoInputs="true">
        <input type="text" v-model="r1p1name" placeholder="Round 1 Player 1"/>
        <input type="text" v-model="r1p1score" placeholder="Score"/>

        <input type="text" v-model="r1p2name" placeholder="Round 1 Player 2"/>
        <input type="text" v-model="r1p2score" placeholder="Score"/>

        <input type="text" v-model="r2p1name" placeholder="Round 2 Player 1"/>
        <input type="text" v-model="r2p1score" placeholder="Score"/>

        <input type="text" v-model="r2p2name" placeholder="Round 2 Player 2"/>
        <input type="text" v-model="r2p2score" placeholder="Score"/>

        <input type="text" v-model="winr2p1name" placeholder="Winner of Round 1"/>
        <input type="text" v-model="winr2p1score" placeholder="Score"/>

        <input type="text" v-model="winr2p2name" placeholder="Winner of Round 2"/>
        <input type="text" v-model="winr2p2score" placeholder="Score"/>

        <input type="text" v-model="loser1p1name" placeholder="Loser of Round 1"/>
        <input type="text" v-model="loser1p1score" placeholder="Score"/>

        <input type="text" v-model="loser1p2name" placeholder="Loser of Round 2"/>
        <input type="text" v-model="loser1p2score" placeholder="Score"/>

        <input type="text" v-model="loser2p1name" placeholder="Loser of Winners Round"/>
        <input type="text" v-model="loser2p1score" placeholder="Score"/>

        <input type="text" v-model="loser2p2name" placeholder="Winner of Losers Round"/>
        <input type="text" v-model="loser2p2score" placeholder="Score"/>
    </InputGroup>

    <button v-on:click="updateData()">Update</button>
  </div>
</template>

<script>
import { remote, ipcRenderer } from "electron";

import Fab from "@/components/Controls/Fab.vue";
import InputGroup from "@/components/Controls/InputGroup.vue";

const yourServerUrl  = 'https://api.smash.gg/gql/alpha/';
const yourQuery = {
  query: `{
          id: 1581602,
          page: 1,
          perPage: 3
      }`
  };


export default {
  name: "ControlBrackets",
  components: {
    Fab,
    InputGroup,
  },
  data: function () {
    return {
      QualiSel: 0,
      
      topLeftText: "BRACKETS",
      
      r1p1name: "Round 1 Player 1",
      r1p1score: 0,
      r1p2name: "Round 1 Player 2",
      r1p2score: 0,

      r2p1name: "Round 2 Player 1",
      r2p1score: 0,
      r2p2name: "Round 2 Player 2",
      r2p2score: 0,

      winr2p1name: "Winner of Round 1",
      winr2p1score: 0,
      winr2p2name: "Winner of Round 2",
      winr2p2score: 0,

      loser1p1name: "Loser of Round 1",
      loser1p1score: 0,
      loser1p2name: "Loser of Round 2",
      loser1p2score: 0,

      loser2p1name: "Loser of Winners Round",
      loser2p1score: 0,
      loser2p2name: "Winner of Losers Round",
      loser2p2score: 0,
    };
  },
  mounted: function () {ipcRenderer.on('update-playerData', (event, newData) => {
            this.$data.topLeftText = newData.topLeftText;
            this.$data.r1p1name = newData.r1p1name;
            this.$data.r1p1score = newData.r1p1score;
            this.$data.r1p2name = newData.r1p2name;
            this.$data.r1p2score = newData.r1p2score;
            this.$data.r2p1name = newData.r2p1name;
            this.$data.r2p1score = newData.r2p1score;
            this.$data.r2p2name = newData.r2p2name;
            this.$data.r2p2score = newData.r2p2score;
            this.$data.winr2p1name = newData.winr2p1name;
            this.$data.winr2p1score = newData.winr2p1score;
            this.$data.winr2p2name = newData.winr2p2name;
            this.$data.winr2p2score = newData.winr2p2score;
            this.$data.loser1p1name = newData.loser1p1name;
            this.$data.loser1p1score = newData.loser1p1score;
            this.$data.loser1p2name = newData.loser1p2name;
            this.$data.loser1p2score = newData.loser1p2score;
            this.$data.loser2p1name = newData.loser2p1name;
            this.$data.loser2p1score = newData.loser2p1score;
            this.$data.loser2p2name = newData.loser2p2name;
            this.$data.loser2p2score = newData.loser2p2score;
        });},
  methods: {
 
    getSmashGroupData: function(){
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.open('GET', yourServerUrl);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader("Authorization", "Bearer f698e3aa0160363d4e4e880ac98fa3a1");
      xhr.onload = function () {
          console.log('data returned:', xhr.response);
      };
      xhr.send(JSON.stringify(yourQuery));
     
     
     /*let phaseGroup1 = await PhaseGroup.get(this.$data.QualiSel);
      let phaseSets = phaseGroup1.getSets();
      console.log(phaseGroup1);
      for(var i in phaseSets){
          console.log(`${String(sets[i].getFullRoundText()).magenta}: ${String(sets[i].getDisplayScore()).green}`);
      }*/

    },

    transition: function () {
      ipcRenderer.send("change-state", "Brackets");
    },

    updateData: function () {
      this.getSmashGroupData();
      console.log("[Controls] Update BracketsData");
      ipcRenderer.send("update-bracketsData", {
        topLeftText: this.$data.topLeftText,
        r1p1name: this.$data.r1p1name,
        r1p1score: this.$data.r1p1score,
        r1p2name: this.$data.r1p2name,
        r1p2score: this.$data.r1p2score,

        r2p1name: this.$data.r2p1name,
        r2p1score: this.$data.r2p1score,
        r2p2name: this.$data.r2p2name,
        r2p2score: this.$data.r2p2score,

        winr2p1name: this.$data.winr2p1name,
        winr2p1score: this.$data.winr2p1score,
        winr2p2name: this.$data.winr2p2name,
        winr2p2score: this.$data.winr2p2score,

        loser1p1name: this.$data.loser1p1name,
        loser1p1score: this.$data.loser1p1score,
        loser1p2name: this.$data.loser1p2name,
        loser1p2score: this.$data.loser1p2score,

        loser2p1name: this.$data.loser2p1name,
        loser2p1score: this.$data.loser2p1score,
        loser2p2name: this.$data.loser2p2name,
        loser2p2score: this.$data.loser2p2score
      });
    },
  },
};
</script>

<style scoped lang="less">
.controlBrackets {
  padding: 5px 20px;
}
</style>
