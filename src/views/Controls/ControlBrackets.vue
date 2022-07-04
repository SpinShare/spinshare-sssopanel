<template>
  <div class="controlBrackets">
    <Fab v-on:click.native="transition()" title="Transition" />

    <InputGroup title="Toornament Event ID">
      <input type="number" v-model="toornamentEventId" />
    </InputGroup>

    <InputGroup title="Toornament Stage ID">
      <input type="number" v-model="toornamentStageId" />
    </InputGroup>
    <InputGroup title="Bracket Selection">
      <!--<input type="number" v-model="phaseID" placeholder="PhaseGroupID" />-->
      <select v-model="bracketSel">
        <option value="1761345" selected>QUALIFIERS: POOL 1</option>
        <option value="1761346">QUALIFIERS: POOL 2</option>
        <option value="1761347">QUALIFIERS: POOL 3</option>
        <option value="1761348">QUALIFIERS: POOL 4</option>
        <option value="1761349">QUALIFIERS: POOL 5</option>
        <option value="1761350">QUALIFIERS: POOL 6</option>
        <option value="1761351">QUALIFIERS: POOL 7</option>
        <option value="1761352">QUALIFIERS: POOL 8</option>
        <option value="1761354" disabled>CHALLENGER BRACKET</option>
        <option value="1761353" disabled>ELITE BRACKET</option>
      </select>
    </InputGroup>

    <button v-on:click="updateData()">Update</button>
  </div>
</template>

<script>
import { remote, ipcRenderer } from "electron";

import Fab from "@/components/Controls/Fab.vue";
import InputGroup from "@/components/Controls/InputGroup.vue";

var obj;
var r1p1name;
var r1p1score;
var r1p2name;
var r1p2score;

var r2p1name;
var r2p1score;
var r2p2name;
var r2p2score;

var r3p1name;
var r3p1score;
var r3p2name;
var r3p2score;

var r6p1name;
var r6p1score;
var r6p2name;
var r6p2score;          

var r4p1name;
var r4p1score;
var r4p2name;
var r4p2score;

var r5p1name;
var r5p1score;
var r5p2name;
var r5p2score;

let bracket = [];

async function load() {
    let url = 'https://cors-anywhere.herokuapp.com/api.start.gg/phase_group/1581592?expand[]=sets&expand[]=seeds';    //MUST GO TO https://cors-anywhere.herokuapp.com AND 
    let headers = new Headers();                                                                                      //REQUEST TEMP ACCESS - NEED AN ALTERNATIVE IF POSSIBLE
    obj = await (await (await fetch(url))).json();
    console.log(obj);

    //Data retrieved, map to output array
    const playerLookup = {      //Lookup table for players, currently retrieved manually for the event
      8979326: "Avri",
      8970975: "TreXDer",
      8982855: "Kwazi",
      8993089: "haomakk",
    };

    const PlayerMap = (entrantID) => playerLookup[entrantID] || "Player not found"; //Quick method to run lookup

    bracket = [];
    let skipped = 0;

    return new Promise(resolve =>{
      for(let x = 0; x < obj.entities.sets.length; x++){     //Populating the output array. x indicates position in the downloaded data (Match identifier), y indicates which element (Player 1 Name / Score, Player 2 Name / Score)
        if(obj.entities.sets[x].entrant1Id == null || obj.entities.sets[x].entrant2Id == null) {continue}

        let p1Name = PlayerMap(obj.entities.sets[x].entrant1Id);
        let p1Score = obj.entities.sets[x].entrant1Score;
        let p2Name = PlayerMap(obj.entities.sets[x].entrant2Id);
        let p2Score = obj.entities.sets[x].entrant2Score;

        bracket.push([p1Name,p1Score,p2Name,p2Score]);
      }

      console.log(bracket);

      /*r1p1name=   bracket[0][0].toString();
      r1p1score=  bracket[0][1].toString();
      r1p2name=   bracket[0][2].toString();
      r1p2score=  bracket[0][3].toString();

      r2p1name=   bracket[1][0].toString();
      r2p1score=  bracket[1][1].toString();
      r2p2name=   bracket[1][2].toString();
      r2p2score=  bracket[1][3].toString();
      
      r3p1name=   bracket[2][0].toString();
      r3p1score=  bracket[2][1].toString();
      r3p2name=   bracket[2][2].toString();
      r3p2score=  bracket[2][3].toString();

      r6p1name=   bracket[3][0].toString();
      r6p1score=  bracket[3][1].toString();
      r6p2name=  bracket[3][2].toString();
      r6p2score=  bracket[3][3].toString();               

      r4p1name=   bracket[4][0].toString();
      r4p1score=  bracket[4][1].toString();
      r4p2name=   bracket[4][2].toString();
      r4p2score=  bracket[4][3].toString();

      r5p1name=   bracket[5][0].toString();
      r5p1score=  bracket[5][1].toString();
      r5p2name=   bracket[5][2].toString();
      r5p2score=  bracket[5][3].toString();  */
      console.log(bracket);  
    resolve(bracket);
  });
}

export default {
  name: "ControlBrackets",
  components: {
    Fab,
    InputGroup,
  },
  data: function () {
    return {
      toornamentEventId: 0,
      toornamentStageId: 0,
      phaseID: 0,
    };
  },
  mounted: function () {},
  methods: {
    setStartggData: function (pg){

    },

    transition: function () {
      ipcRenderer.send("change-state", "Brackets");
    },


    updateData: function () {
      console.log("[Controls] Update BracketsData");
      bracket = await load();

      console.log(r1p1name, r1p1score, r1p2name, r1p2score)
      ipcRenderer.send("update-bracketsData", {
        toornamentEventId: this.$data.toornamentEventId,
        toornamentStageId: this.$data.toornamentStageId,
        topLeftText: "BRACKET",                   //this.bracketSel.text(),
        
        //bracket: this.bracket
        //r1p1name, r1p1score, r1p2name, r1p2score,
        //r2p1name, r2p1score, r2p2name, r2p2score,
        //r3p1name, r3p1score, r3p2name, r3p2score,
        //r6p1name, r6p1score, r6p2name, r6p2score,               
        //r4p1name, r4p1score, r4p2name, r4p2score,
        //r5p1name, r5p1score, r5p2name, r5p2score,

        r1p1name:   bracket[0][0].toString(),
        r1p1score:  bracket[0][1].toString(),
        r1p2name:   bracket[0][2].toString(),
        r1p2score:  bracket[0][3].toString(),

        r2p1name:   bracket[1][0].toString(),
        r2p1score:  bracket[1][1].toString(),
        r2p2name:   bracket[1][2].toString(),
        r2p2score:  bracket[1][3].toString(),
        
        r3p1name:   bracket[2][0].toString(),
        r3p1score:  bracket[2][1].toString(),
        r3p2name:   bracket[2][2].toString(),
        r3p2score:  bracket[2][3].toString(),

        r6p1name:   bracket[3][0].toString(),
        r6p1score:  bracket[3][1].toString(),
        r6p2name:  bracket[3][2].toString(),
        r6p2score:  bracket[3][3].toString(),               

        r4p1name:   bracket[4][0].toString(),
        r4p1score:  bracket[4][1].toString(),
        r4p2name:   bracket[4][2].toString(),
        r4p2score:  bracket[4][3].toString(),

        r5p1name:   bracket[5][0].toString(),
        r5p1score:  bracket[5][1].toString(),
        r5p2name:   bracket[5][2].toString(),
        r5p2score:  bracket[5][3].toString(),
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
