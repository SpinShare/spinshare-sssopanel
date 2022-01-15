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
    <InputGroup title="Phase">
      <select id="selectedPhase">
        <option value="1002204">Qualifiers</option>
        <option value="1002220">Challenger Playoffs</option>
        <option value="1002212">Elite Playoffs</option>
      </select>
    </InputGroup>
    
    <InputGroup title="Phase Group (Qualifiers Only)">
      <select id="selectedQualiGroup" v-model="QualiSel">
        <option value="1581602" v-on:click="updateData(QualiSel=1581602)">(7) swagdude, Daquat, Abysmal Cosmos, AngryScootsman</option>
        <option value="1581599" v-on:click="updateData(QualiSel=1581599)">(4) Mapy, tetrachris, oproerling, CaliCalicko</option>
        <option value="1581592" v-on:click="updateData(QualiSel=1581592)">(1) TreXDer, Kwazi, haomakk, Avri</option>
        <option value="1581601" v-on:click="updateData(QualiSel=1581601)">(6) PnO_Mader, metalman20, Halflite, CarbonCarbon12</option>
        <option value="1581597" v-on:click="updateData(QualiSel=1581597)">(2) Ricki, GaviGuy, Franco, Drogin_dunlane</option>
        <option value="1581603" v-on:click="updateData(QualiSel=1581603)">(8) Konomi, Ballinbino, Cahobo, Nemo</option>
        <option value="1581600" v-on:click="updateData(QualiSel=1581600)">(5) Pick, Krauvando, Gamer97, FlyinPoulpus</option>
        <option value="1581598" v-on:click="updateData(QualiSel=1581598)">(3) Programmatic, Edge, Loosiano, Aexus</option>
      </select>
    </InputGroup>

    <button v-on:click="updateData()">Update</button>
  </div>
</template>

<script>
const axios = require('axios').default;
let smashData = null;
import { remote, ipcRenderer } from "electron";

import Fab from "@/components/Controls/Fab.vue";
import InputGroup from "@/components/Controls/InputGroup.vue";

const yourServerUrl  = 'https://api.smash.gg/gql/alpha/';
const yourQuery = {
  query: `{phaseGroup(id:1581602){
              id
              displayIdentifier
              sets(
                page: 1
                perPage: 20
                sortType: STANDARD
              ){
                pageInfo{
                  total
                }
                nodes{
                  id
                  slots{
                    id
                    entrant{
                      id
                      name
                    }
                  }
                }
              }
            }
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

      r2p1name: "YES Round 2 Player 1",
      r2p1score: 0,
      r2p2name: "NO Round 2 Player 2",
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
  mounted: function () {},
  methods: {
 
    getSmashGroupData: function(){
      const query = `query PhaseGroupSets{
        phaseGroup(id:1581602){
          id
          displayIdentifier
          sets(
            page: 1
            perPage: 20
            sortType: STANDARD
          ){
            pageInfo{
              total
            }
            nodes{
              id
              slots{
                id
                entrant{
                  id
                  name
                }
              }
            }
          }
        }
      }`
      const jsonQuery = JSON.stringify({ query });
      const res = axios.post('https://api.smash.gg/gql/alpha', {
        headers: {
          'Authorization': `Bearer d71313e118d959f25ffe64818ffac164`,
          'Content-Type': 'application/json',
          'Access-Control-Request-Method': 'POST',
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json',
          
        },
        body: jsonQuery
      });
      smashData = res;

      //res.data.data; // '{"answer":42}'
      //res.data.headers['Content-Type', 'Authorization']; // 'application/json',
      
      /*const xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.open('POST', yourServerUrl);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader(Access-Control-Allow-Origin, '*');
      xhr.setRequestHeader("Authorization", "Bearer f698e3aa0160363d4e4e880ac98fa3a1");
      xhr.onload = function () {
          console.log('data returned:', xhr.response);
      };
      xhr.send(JSON.stringify(yourQuery));*/
     
     
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
        r1p1name: this.$data.QualiSel,
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
